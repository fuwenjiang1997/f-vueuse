# 介绍

欢迎使用 **f-vueuse**，这是一个为 Vue 3 项目打造的实用 composables 库。

## 什么是 f-vueuse？

f-vueuse 是一个轻量级的 Vue 3 composables 集合，旨在帮助开发者快速构建高效的 Vue 应用。它提供了一系列常用的组合式函数，涵盖状态管理、DOM 操作、事件处理等多个领域。

## 核心特性

- **TypeScript 原生支持**：所有 composables 都用 TypeScript 编写，提供完整的类型定义
- **轻量级**：无冗余依赖，专注于核心功能
- **响应式优先**：充分利用 Vue 3 的响应式系统
- **开箱即用**：简单的 API 设计，快速上手

## 可用 Composables

目前 f-vueuse 提供以下 composables：

- [x] useRefHistory：管理值的历史记录，支持撤销/重做
- [x] useToggle：布尔值切换状态管理
- [x] useThrottleFn：函数节流工具
- [x] useDebounceFn：函数防抖工具
- [x] useLoading：管理加载状态
- [x] useMouse：追踪鼠标位置
- [x] useStorage：通用存储封装
- [x] useLocalStorage：localStorage 封装
- [ ] useEventListener：事件监听器封装
- [ ] useIntersectionObserver：交叉观察器
- [ ] useScroll：滚动位置监听
- [ ] useMediaQuery：媒体查询响应式
- [ ] useRafFn：requestAnimationFrame 封装
- [ ] useIntervalFn：定时器函数封装
- [ ] useAsyncState：异步状态管理
- [ ] useFetch：HTTP 请求封装
- [ ] useElementSize：元素尺寸监听
- [ ] useResizeObserver：元素尺寸变化监听
