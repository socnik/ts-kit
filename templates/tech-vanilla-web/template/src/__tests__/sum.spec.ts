import { sum } from '@/sum'

describe('sum', () => {
  describe('sum should correct add numbers', () => {
    test('2 + 2 = 4', () => {
      expect(sum(2, 2)).toBe(4)
    })
  })
})
