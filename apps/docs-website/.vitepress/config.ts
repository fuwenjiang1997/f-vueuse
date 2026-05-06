import taskLists from 'markdown-it-task-lists'
import { defineConfig } from 'vitepress'

import { locales } from './i18n'
import { generateMultiLangSidebar } from './utils'

export default defineConfig({
  base: '/f-vueuse/',
  markdown: {
    config(md) {
      md.use(taskLists, {
        disabled: false,
        label: true,
        labelAfter: true
      })
    }
  },
  title: 'f-vueuse',
  description: 'f-vueuse 是一个 Vue 3 组件库，提供了一些 Vue 3 组件的使用方法。',
  srcDir: 'docs',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    sidebar: generateMultiLangSidebar().root,
    editLink: {
      pattern: 'https://github.com/fuwenjiang1997/f-vueuse/apps/docs-website/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  },
  locales
})
