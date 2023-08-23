import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: ['./src/test/types/**', 'node_modules'],
    globals: true,
  },
})
