---
title: Guide
editLink: true
---

# Guide

Welcome to the f-vueuse guide. This document will help you get started with using f-vueuse composables in your Vue projects.

## Installation

First, install f-vueuse via npm or yarn:

```bash
npm install f-vueuse
# or
yarn add f-vueuse
```

## Basic Usage

Import the composables you need:

```vue
<script setup>
import { useLoading, useMouse } from 'f-vueuse'

const [handler, isLoading] = useLoading((done) => {
  setTimeout(() => {
    console.log('Done!')
    done()
  }, 1000)
})

const { x, y } = useMouse()
</script>
```

## Available Composables

| Composable | Description |
|------------|-------------|
| useLoading | Manage loading state for async operations |
| useMouse | Track mouse position |

## Contributing

We welcome contributions! Please see our [Contributing Guide](./contributing) for more details.
