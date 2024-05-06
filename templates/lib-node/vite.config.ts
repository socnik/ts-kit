import { defineConfig } from 'vite'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './configs/typescript/tsconfig.build.json',
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es'],
      fileName: 'index',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(join(dirname(import.meta.url), './src')),
    },
  },
})
