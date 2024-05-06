import { defineConfig } from 'vite'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts'
import { externalizeDeps } from 'vite-plugin-externalize-deps'

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './configs/typescript/tsconfig.build.json',
      rollupTypes: true,
    }),
    externalizeDeps({
      deps: true,
      devDeps: true,
      peerDeps: true,
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es'],
      fileName: 'index',
    },
    ssr: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(join(dirname(import.meta.url), './src')),
    },
  },
})
