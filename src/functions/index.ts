import type { ExtractNonNullable, OmitKeys, Prettify, Recordable } from '../types'

export function entries<T extends object>(obj: T): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as any
}

export function entriesFind<
  T extends Recordable = Recordable,
>(
  obj: T,
  predicate: (item: [keyof T, T[keyof T]]) => boolean,
) {
  return entries(obj).find(predicate)
}

export function oneOf<
  const T extends unknown[] = unknown[],
  const V extends T[number] = T[number],
>(value: V, values: T): value is V {
  return values.includes(value)
}

export function debounce<F extends (...args: any[]) => any>(func: F, wait: number): F {
  let timeout: ReturnType<typeof setTimeout> | null

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const later = () => {
      timeout = null
      func.apply(this, args)
    }

    if (timeout)
      clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  } as F
}

export function throttle<F extends (...args: any[]) => any>(func: F, limit: number): F {
  let inThrottle: boolean
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (!inThrottle) {
      func.apply(args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  } as F
}

export function loop<T>(arr: T[], callback: (item: T, index: number) => void) {
  let index = 0
  const len = arr.length
  while (index < len) {
    callback(arr[index], index)
    index++
  }
}

export function rangeLoop(start: number, end: number, callback: (index: number) => void) {
  let index = start
  while (index <= end) {
    callback(index)
    index++
  }
}

export function loopAsync<T>(arr: T[], callback: (item: T, index: number) => Promise<void>) {
  let index = 0
  const len = arr.length
  const next = () => {
    if (index < len) {
      callback(arr[index], index).then(() => {
        index++
        next()
      })
    }
  }
  next()
}

export function mapObject<T extends object, V>(obj: T, cb: (value: T[keyof T], key: keyof T) => V) {
  return entries(obj).reduce((acc, [key, value]) => {
    acc[key] = cb(value, key)
    return acc
  }, {} as { [key in keyof T]: ReturnType<typeof cb> })
}

/**
 * Omit the specified keys, non recursively
 */
export function omitKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): Prettify<OmitKeys<T, K>> {
  const result = { ...obj }
  keys.forEach((key) => {
    Reflect.deleteProperty(result, key)
  })
  return result as any
}

/**
 * Remove nullish (null / undefined) fields from an object
 */
export function removeNullishFields<T extends object>(obj: T): ExtractNonNullable<T> {
  return Object.fromEntries(
    entries(obj).filter(([, value]) => {
      return value !== null && typeof value !== 'undefined'
    }),
  ) as any
}
