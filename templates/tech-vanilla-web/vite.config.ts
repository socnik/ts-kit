import { defineConfig } from 'vite'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'

export default defineConfig({
  envDir: 'configs/env',
  css: {
    postcss: {
      plugins: [autoprefixer(), postcssNested()],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(join(dirname(import.meta.url), './src')),
    },
  },
})
