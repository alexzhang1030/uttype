import { describe, expect, test, vi } from 'vitest'
import { debounce, throttle } from '../../functions'

describe('debounce function', () => {
  test('should call the debounced function only once after the specified delay', () => {
    const func = vi.fn()
    const debouncedFunc = debounce(func, 100)

    debouncedFunc()
    debouncedFunc()
    debouncedFunc()

    setTimeout(() => {
      expect(func).toHaveBeenCalledTimes(1)
    }, 150)
  })
})

describe('throttle function', () => {
  test('should call the throttled function only once within the specified time limit', () => {
    const func = vi.fn()
    const throttledFunc = throttle(func, 100)

    throttledFunc()
    throttledFunc()
    throttledFunc()

    setTimeout(() => {
      expect(func).toHaveBeenCalledTimes(1)
    }, 50)

    setTimeout(() => {
      expect(func).toHaveBeenCalledTimes(2)
    }, 150)
  })
})
