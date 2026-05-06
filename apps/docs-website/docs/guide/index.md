---
title: 使用指南
editLink: true
---

# 使用指南

欢迎阅读 f-vueuse 指南。本文档将帮助你在 Vue 项目中开始使用 f-vueuse composables。

## 安装

首先，通过 npm 或 yarn 安装 f-vueuse：

```bash
npm install f-vueuse
# 或
yarn add f-vueuse
```

## 基本用法

导入你需要的 composables：

```vue
<script setup>
import { useLoading, useMouse } from 'f-vueuse'

const [handler, isLoading] = useLoading((done) => {
  setTimeout(() => {
    console.log('完成!')
    done()
  }, 1000)
})

const { x, y } = useMouse()
</script>
```

## 可用的 Composables

| Composable | 描述                   |
| ---------- | ---------------------- |
| useLoading | 管理异步操作的加载状态 |
| useMouse   | 追踪鼠标位置           |

## 贡献

我们欢迎贡献！请查看我们的 [贡献指南](./contributing) 获取更多详情。
