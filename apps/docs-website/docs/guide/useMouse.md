---
title: useMouse
editLink: true
---

# useMouse

追踪鼠标位置。

## 用法

```vue
<script setup>
import { useMouse } from 'f-vueuse'

const { x, y } = useMouse()
</script>

<template>
  <div>
    鼠标位置: ({{ x }}, {{ y }})
  </div>
</template>
```

## 返回值

| 参数 | 类型          | 描述        |
| ---- | ------------- | ----------- |
| x    | `Ref<number>` | 鼠标 X 坐标 |
| y    | `Ref<number>` | 鼠标 Y 坐标 |

## 类型定义

```typescript
type UseMouseReturn = {
  x: Ref<number>
  y: Ref<number>
}
```
