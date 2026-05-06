# useRefHistory

`useRefHistory` 是一个用于管理值的历史记录的 Vue 组合式 API（Composition API）函数。它通过保存历史记录，使得你能够执行回退（撤销）和前进（重做）等操作。

## 基本用法

```vue
<template>
    <div>
        <h1>当前值：{{ current }}</h1>
        <div>历史记录：{{ JSON.stringify(history) }}</div>
        <button @click="count++">增加</button>
        <button @click="undo" :disabled="!canUndo">撤销</button>
        <button @click="redo" :disabled="!canRedo">重做</button>
        <button @click="clear">清空历史</button>
    </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRefHistory } from '@f-vueuse/core'

const count = ref(0)

const { history, current, canRedo, canUndo, undo, redo, clear } = useRefHistory<number>(count)

watchEffect(() => {
    console.log(history.value)
})
</script>
```

## API

### 参数

| 参数       | 类型                     | 默认值 | 说明                        |
| ---------- | ------------------------ | ------ | --------------------------- |
| `refValue` | `Ref<T>`                 | -      | 需要追踪历史记录的 ref 对象 |
| `params`   | `UseRefHistoryParams<T>` | `{}`   | 可选配置参数                |

### UseRefHistoryParams

| 参数   | 类型      | 默认值  | 说明                 |
| ------ | --------- | ------- | -------------------- |
| `deep` | `boolean` | `false` | 是否深度监听对象变化 |

### 返回值

| 返回值    | 类型                   | 说明                           |
| --------- | ---------------------- | ------------------------------ |
| `history` | `ComputedRef<T[]>`     | 当前位置之前的所有历史记录数组 |
| `current` | `ComputedRef<T>`       | 当前历史记录的值               |
| `canUndo` | `ComputedRef<boolean>` | 是否可以执行撤销操作           |
| `canRedo` | `ComputedRef<boolean>` | 是否可以执行重做操作           |
| `undo`    | `() => void`           | 撤销操作，回退到上一个历史记录 |
| `redo`    | `() => void`           | 重做操作，前进到下一个历史记录 |
| `clear`   | `() => void`           | 清空所有历史记录               |

## 使用示例

### 文本编辑器历史记录

```vue
<template>
    <div>
        <textarea v-model="content" rows="5" cols="50"></textarea>
        <div>
            <button @click="undo" :disabled="!canUndo">撤销</button>
            <button @click="redo" :disabled="!canRedo">重做</button>
            <button @click="clear">清空历史</button>
        </div>
        <div>历史记录数：{{ history.length }}</div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRefHistory } from '@f-vueuse/core'

const content = ref('')
const { history, canUndo, canRedo, undo, redo, clear } = useRefHistory(content)
</script>
```

### 对象状态管理

```vue
<template>
    <div>
        <input v-model="form.name" placeholder="姓名" />
        <input v-model="form.age" type="number" placeholder="年龄" />
        <button @click="undo" :disabled="!canUndo">撤销</button>
        <button @click="redo" :disabled="!canRedo">重做</button>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRefHistory } from '@f-vueuse/core'

const form = reactive({
    name: '',
    age: 0
})

const formRef = ref(form)
const { canUndo, canRedo, undo, redo } = useRefHistory(formRef, { deep: true })
</script>
```

## 注意事项

1. **初始值**：历史记录会自动包含初始值作为第一条记录
2. **值比较**：使用 `!==` 进行值比较，对于复杂对象建议使用 `deep: true`
3. **性能考虑**：频繁变化的值会产生大量历史记录，建议配合防抖使用（未来版本会支持）
4. **数组操作**：直接修改数组元素（如 `arr[0] = value`）不会触发响应式更新，需要使用 Vue 的响应式方法

## 未来计划

- [ ] `commit` 手动保存快照
- [ ] 自定义序列化函数
- [ ] 防抖节流支持
- [ ] 数据持久化（localStorage）
- [ ] 最大历史记录数限制
