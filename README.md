# f-vueuse 🧰

轻量、实用的 Vue 3 Composable 工具库，让你的开发更高效。

## 🌟 特性

- **TypeScript 原生支持**：完整的类型定义和类型推导
- **轻量级**：无冗余依赖，支持 Tree Shaking
- **响应式优先**：充分利用 Vue 3 的响应式系统
- **开箱即用**：简单的 API 设计，快速上手

## 📦 安装

```bash
# 使用 pnpm
pnpm add fj-vueuse-core

# 使用 npm
npm install fj-vueuse-core

# 使用 yarn
yarn add fj-vueuse-core
```

## 🚀 快速开始

```typescript
import { useRefHistory, useToggle, useThrottleFn } from 'fj-vueuse-core'
import { ref } from 'vue'

// 历史记录管理
const count = ref(0)
const { undo, redo, canUndo, canRedo } = useRefHistory(count)

// 布尔值切换
const [isActive, toggle] = useToggle()

// 函数节流
const throttledFn = useThrottleFn(() => {
  console.log('节流执行')
}, 1000)
```

## 📚 可用 Composables

| Composable      | 描述                            | 状态 |
| --------------- | ------------------------------- | ---- |
| `useRefHistory` | 管理值的历史记录，支持撤销/重做 | ✅    |
| `useToggle`     | 布尔值切换状态管理              | ✅    |
| `useThrottleFn` | 函数节流工具                    | ✅    |
| `useDebounceFn` | 函数防抖工具                    | ✅    |
| `useLoading`    | 加载状态管理                    | ✅    |
| `useMouse`      | 鼠标位置追踪                    | ✅    |

## 🔮 即将推出

- `useEventListener` - 事件监听器封装
- `useIntersectionObserver` - 交叉观察器
- `useScroll` - 滚动位置监听
- `useMediaQuery` - 媒体查询响应式

## 📖 文档

完整文档请访问：[https://fuwenjiang1997.github.io/f-vueuse](https://fuwenjiang1997.github.io/f-vueuse)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License
