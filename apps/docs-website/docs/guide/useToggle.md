# useToggle

`useToggle` 是一个用于管理布尔值切换状态的 Vue 组合式 API 函数。它提供了一组便捷的方法来控制布尔值的切换。

## 基本用法

```vue
<template>
    <div>
        <h1>状态：{{ isActive ? '激活' : '未激活' }}</h1>
        <button @click="isActiveApi.toggle">切换</button>
        <button @click="isActiveApi.on">开启</button>
        <button @click="isActiveApi.off">关闭</button>
        <button @click="isActiveApi.reset">重置</button>
        <button @click="isActiveApi.toggleWith(true)">设为开启</button>
    </div>
</template>
<script setup lang="ts">
import { useToggle } from '@fuwenjiang/vueuse-core'

const [isActive, isActiveApi] = useToggle({ defaultValue: false })
</script>
```

## API

### 参数

| 参数           | 类型      | 默认值  | 说明   |
| -------------- | --------- | ------- | ------ |
| `defaultValue` | `boolean` | `false` | 初始值 |

### 返回值

| 返回值 | 类型                 | 说明         |
| ------ | -------------------- | ------------ |
| `data` | `Ref<boolean>`       | 当前状态值   |
| `api`  | `UseToggleResultApi` | 操作方法对象 |

### UseToggleResultApi

| 方法                | 说明           |
| ------------------- | -------------- |
| `toggle()`          | 切换状态       |
| `on()`              | 设置为 `true`  |
| `off()`             | 设置为 `false` |
| `reset()`           | 重置为初始值   |
| `toggleWith(value)` | 设置为指定值   |

## 使用示例

### 开关组件

```vue
<template>
    <div>
        <span :class="{ active: isOn }">{{ isOn ? 'ON' : 'OFF' }}</span>
        <button @click="toggle">切换</button>
    </div>
</template>
<script setup lang="ts">
import { useToggle } from '@fuwenjiang/vueuse-core'

const [isOn, { toggle }] = useToggle({ defaultValue: true })
</script>
```
