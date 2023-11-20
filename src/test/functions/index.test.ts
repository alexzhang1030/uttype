import { describe, expect, it, vi } from 'vitest'
import { debounce, mapObject, throttle } from '../../functions'

describe('debounce function', () => {
  it('should call the debounced function only once after the specified delay', () => {
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
  it('should call the throttled function only once within the specified time limit', () => {
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

describe('mapObject', () => {
  it('should return correctly', () => {
    const object = {
      a: 1,
      b: 2,
    }
    expect(mapObject(object, v => v * 2)).toEqual({
      a: 2,
      b: 4,
    })
  })
  it('different type', () => {
    const object = {
      a: 1,
      b: 2,
    }
    expect(mapObject(object, (v, k) => k)).toEqual({
      a: 'a',
      b: 'b',
    })
  })
})
