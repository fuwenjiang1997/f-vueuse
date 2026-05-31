# useToggle

`useToggle` 是一个用于管理状态切换状态的 Vue 组合式 API 函数。它提供了一组便捷的方法来控制状态的切换。

## 基本用法

<script setup lang="ts">
import { useToggle } from 'fj-vueuse-core'

const [isActive, isActiveApi] = useToggle('on', 'off', (newState) => {
    alert(`触发了回调，切换状态为 ${newState}`)
})
const [isActive2, isActive2Api] = useToggle('on', 'off')
</script>

<div>
    <div style="display: flex; gap: 10px;">
        <strong>带回调的状态切换：{{ isActive === 'on' ? '打开' : '关闭' }}</strong>
        <div style="display: flex; gap: 10px;">
            <button @click="isActiveApi.toggle">切换</button>
            <button @click="isActiveApi.reset">重置</button>
            <button @click="isActiveApi.toggleWith('on')">设为打开</button>
            <button @click="isActiveApi.toggleWith('off')">设为关闭</button>
        </div>
    </div>
    <div style="display: flex; gap: 10px;">
        <strong>不带回调的状态切换：{{ isActive2 === 'on' ? '打开' : '关闭' }}</strong>
        <div style="display: flex; gap: 10px;">
            <button @click="isActive2Api.toggle">切换</button>
            <button @click="isActive2Api.reset">重置</button>
            <button @click="isActive2Api.toggleWith('on')">设为打开</button>
            <button @click="isActive2Api.toggleWith('off')">设为关闭</button>
        </div>
    </div>
</div>


```vue
<template>
    <div>
        <div style="display: flex; gap: 10px;">
            <p>带回调的状态：{{ isActive === 'on' ? '打开' : '关闭' }}</p>
            <div style="display: flex; gap: 10px;">
                <button @click="isActiveApi.toggle">切换</button>
                <button @click="isActiveApi.reset">重置</button>
                <button @click="isActiveApi.toggleWith('on')">设为打开</button>
            </div>
        </div>
        <div style="display: flex; gap: 10px;">
            <p>不带回调的状态：{{ isActive2 === 'on' ? '打开' : '关闭' }}</p>
            <div style="display: flex; gap: 10px;">
                <button @click="isActive2Api.toggle">切换</button>
                <button @click="isActive2Api.reset">重置</button>
                <button @click="isActive2Api.toggleWith('on')">设为打开</button>    
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useToggle } from 'fj-vueuse-core'

const [isActive, isActiveApi] = useToggle('on', 'off', (newState) => {
    alert(`触发了回调，切换状态为 ${newState}`)
})
const [isActive2, isActive2Api] = useToggle('on', 'off')
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
import { useToggle } from 'fj-vueuse-core'

const [isOn, { toggle }] = useToggle({ defaultValue: true })
</script>
```
