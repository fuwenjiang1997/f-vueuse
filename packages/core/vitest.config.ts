import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts', 'src/**/__test__/*.test.ts', 'src/**/__test__/*.spec.ts']
  }
})
