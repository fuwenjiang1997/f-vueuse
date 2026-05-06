---
title: useLoading
editLink: true
---

# useLoading

管理异步操作的加载状态。

## 用法

```vue
<script setup>
import { useLoading } from 'f-vueuse'

const [handler, isLoading] = useLoading((done) => {
  setTimeout(() => {
    console.log('操作完成')
    done()
  }, 1000)
})

// 调用 handler 执行异步操作
handler()
</script>

<template>
  <button @click="handler" :disabled="isLoading">
    {{ isLoading ? '加载中...' : '点击执行' }}
  </button>
</template>
```

## 带参数的用法

```vue
<script setup>
import { useLoading } from 'f-vueuse'

const [handler, isLoading] = useLoading((done, name: string) => {
  setTimeout(() => {
    console.log(`你好, ${name}`)
    done()
  }, 1000)
})

// 传递参数
handler('张三')
</script>
```

## 返回值

| 参数      | 类型                            | 描述               |
| --------- | ------------------------------- | ------------------ |
| handler   | `(...args: T) => Promise<void>` | 执行异步操作的函数 |
| isLoading | `Ref<boolean>`                  | 加载状态           |

## 类型定义

```typescript
type UseLoadingFn<T extends any[] = any[]> = (done: () => void, ...args: T) => void
type UseLoadingHandler<T extends any[] = any[]> = (...args: T) => Promise<void>
type UseLoadingReturn<T extends any[] = any[]> = [UseLoadingHandler<T>, Ref<boolean>]
```
