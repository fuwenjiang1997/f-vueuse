# useThrottleFn

`useThrottleFn` 是一个用于创建节流函数的 Vue 组合式 API。节流可以限制函数在指定时间间隔内最多执行一次。

## 基本用法

```vue
<template>
    <div>
        <button @click="throttledClick">点击我</button>
        <p>点击次数：{{ count }}</p>
    </div>
</template>
<script setup lang="ts">
import { useThrottleFn } from '@fj/vueuse-core'
import { ref } from 'vue'

const count = ref(0)

const throttledClick = useThrottleFn(() => {
    count.value++
}, 1000)
</script>
```

## API

### 参数

| 参数      | 类型                      | 默认值 | 说明                 |
| --------- | ------------------------- | ------ | -------------------- |
| `fn`      | `(...args: any[]) => any` | -      | 需要节流的函数       |
| `delay`   | `number`                  | `500`  | 节流时间间隔（毫秒） |
| `options` | `UseThrottleFnOptions`    | `{}`   | 可选配置             |

### UseThrottleFnOptions

| 参数        | 类型      | 默认值  | 说明                               |
| ----------- | --------- | ------- | ---------------------------------- |
| `immediate` | `boolean` | `false` | 是否立即执行（首次调用时立即执行） |

### 返回值

| 返回值      | 类型                               | 说明         |
| ----------- | ---------------------------------- | ------------ |
| `throttled` | `(...args: Parameters<T>) => void` | 节流后的函数 |

## 使用示例

### 带参数的节流

```vue
<template>
    <div>
        <button @click="() => throttledGreet('World')">打招呼</button>
    </div>
</template>
<script setup lang="ts">
import { useThrottleFn } from '@fj/vueuse-core'

const throttledGreet = useThrottleFn((name: string) => {
    console.log(`Hello, ${name}!`)
}, 1000)
</script>
```

### 立即执行模式

```typescript
const throttledFn = useThrottleFn(() => {
    console.log('立即执行')
}, 1000, { immediate: true })

throttledFn() // 立即执行
throttledFn() // 被节流，1秒后执行
```

## 节流 vs 防抖

| 特性         | 节流 (Throttle)             | 防抖 (Debounce)                     |
| ------------ | --------------------------- | ----------------------------------- |
| **触发方式** | 固定时间间隔执行            | 停止触发后执行                      |
| **适用场景** | 滚动事件、鼠标移动          | 搜索输入、按钮防重复点击            |
| **执行时机** | 每 `delay` 毫秒最多执行一次 | 最后一次触发后等待 `delay` 毫秒执行 |
