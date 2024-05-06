import { sum } from '@/sum'
import { bench } from 'vitest'

describe('sum', () => {
  bench('sum numbers', () => {
    sum(1_000_000, 10_123_456)
  })
})
