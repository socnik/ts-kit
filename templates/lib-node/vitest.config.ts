import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['src/**/__tests__/*.spec.ts'],
      globals: true,
      outputFile: {
        html: 'reports/test/html/index.html',
      },
      reporters: ['default', 'html'],
      benchmark: {
        include: ['src/**/__tests__/*.bench.ts'],
        reporters: ['default'],
      },
      coverage: {
        provider: 'v8',
        include: ['src/**'],
        reportsDirectory: 'reports/coverage',
        reporter: [
          [
            'html',
            {
              subdir: 'html',
            },
          ],
        ],
      },
    },
  })
)
