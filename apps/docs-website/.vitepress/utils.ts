import { dirname,join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { readdirSync, statSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

// 读取目录并生成 sidebar 配置
export function generateSidebar(lang: string = ''): Record<string, SidebarItem[]> {
  const docsDir = join(__dirname, '..', 'docs', lang || '')
  const sidebar: Record<string, SidebarItem[]> = {}

  // 扫描 guide 目录
  const guideDir = join(docsDir, 'guide')
  if (statSync(guideDir).isDirectory()) {
    const prefix = lang ? `/${lang}/guide/` : '/guide/'
    sidebar[prefix] = generateItems(guideDir, prefix)
  }

  return sidebar
}

// 生成单个目录的 sidebar 项
function generateItems(dir: string, prefix: string): SidebarItem[] {
  const items: SidebarItem[] = []
  const files = readdirSync(dir)

  files.forEach(file => {
    const fullPath = join(dir, file)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) {
      // 子目录
      items.push({
        text: file,
        collapsed: true,
        items: generateItems(fullPath, `${prefix}${file}/`)
      })
    } else if (file.endsWith('.md')) {
      // Markdown 文件
      const name = file.replace('.md', '')
      const isIndex = name === 'index'

      items.push({
        text: isIndex ? '介绍' : name,
        link: isIndex ? prefix.slice(0, -1) : `${prefix}${name}`
      })
    }
  })

  // 排序：index.md 放在最前面，然后按字母顺序
  return items.sort((a, b) => {
    if (a.link?.endsWith('/') && !b.link?.endsWith('/')) return -1
    if (!a.link?.endsWith('/') && b.link?.endsWith('/')) return 1
    return a.text.localeCompare(b.text)
  })
}

// 生成完整的多语言 sidebar 配置
export function generateMultiLangSidebar() {
  const sidebar: Record<string, Record<string, SidebarItem[]>> = {
    root: generateSidebar()
    // en: generateSidebar('en')
  }

  return sidebar
}
