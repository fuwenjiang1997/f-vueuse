# useDebounceFn
---
title: useDebounceFn
---

`useDebounceFn` 是一个用于创建防抖函数的 Vue 组合式 API。防抖可以确保函数在指定时间内没有再次被调用后才执行。

## 基本用法

```vue
<template>
    <div>
        <input v-model="inputValue" @input="debouncedSearch" placeholder="搜索..." />
        <p>搜索内容：{{ inputValue }}</p>
        <p>搜索次数：{{ searchCount }}</p>
    </div>
</template>
<script setup lang="ts">
import { useDebounceFn } from '@f-vueuse/core'
import { ref } from 'vue'

const inputValue = ref('')
const searchCount = ref(0)

const debouncedSearch = useDebounceFn((value: string) => {
    searchCount.value++
    console.log('搜索:', value)
}, 500)
</script>
```

## API

### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `fn` | `(...args: any[]) => any` | - | 需要防抖的函数 |
| `delay` | `number` | `500` | 防抖延迟时间（毫秒） |
| `options` | `UseDebounceFnOptions` | `{}` | 可选配置 |

### UseDebounceFnOptions

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `immediate` | `boolean` | `false` | 是否立即执行（首次调用时立即执行） |

### 返回值

| 返回值 | 类型 | 说明 |
|--------|------|------|
| `debounced` | `(...args: Parameters<T>) => void` | 防抖后的函数 |

## 使用示例

### 搜索输入防抖

```vue
<template>
    <input 
        v-model="query" 
        @input="() => debouncedSearch(query)" 
        placeholder="输入搜索关键词" 
    />
</template>
<script setup lang="ts">
import { useDebounceFn } from '@f-vueuse/core'
import { ref } from 'vue'

const query = ref('')

const debouncedSearch = useDebounceFn((keyword: string) => {
    // 调用搜索 API
    console.log('搜索:', keyword)
}, 300)
</script>
```

### 立即执行模式

```typescript
const debouncedFn = useDebounceFn(() => {
    console.log('立即执行')
}, 1000, { immediate: true })

debouncedFn() // 立即执行
debouncedFn() // 被忽略（等待中）
debouncedFn() // 被忽略（等待中）
// 1秒后，如果没有新调用，不会再次执行
```

## 应用场景

- **搜索输入框**：用户输入停止后才发送搜索请求
- **窗口 resize**：窗口大小调整完成后才执行布局计算
- **按钮防重复点击**：防止用户快速连续点击触发多次操作
- **表单验证**：输入停止后才进行验证
