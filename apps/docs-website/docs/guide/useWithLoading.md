# useWithLoading

管理异步操作的加载状态。

<script setup>
import { useWithLoading } from 'fj-vueuse-core'

const [handler, isLoading] = useWithLoading((done) => {
    setTimeout(() => {
        alert('操作完成')
        done()
    }, 1000)
})

</script>

<button @click="handler" :disabled="isLoading">
    {{ isLoading ? '加载中...' : '点击执行' }}
</button>

```vue
<script setup>
import { useWithLoading } from 'fj-vueuse-core'

const [handler, isLoading] = useWithLoading((done) => {
  setTimeout(() => {
    alert('操作完成')
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
import { useWithLoading } from 'fj-vueuse-core'

const [handler, isLoading] = useWithLoading((done, name: string) => {
  setTimeout(() => {
    done(`你好, ${name}`)
  }, 1000)
})
</script>
```

## 返回值

| 参数      | 类型                            | 描述               |
| --------- | ------------------------------- | ------------------ |
| handler   | `(...args: T) => Promise<void>` | 执行异步操作的函数 |
| isLoading | `Ref<boolean>`                  | 加载状态           |

## 类型定义

```typescript
type useWithLoadingFn<T extends any[] = any[]> = (done: () => void, ...args: T) => void
type useWithLoadingHandler<T extends any[] = any[]> = (...args: T) => Promise<void>
type useWithLoadingReturn<T extends any[] = any[]> = [useWithLoadingHandler<T>, Ref<boolean>]
```
