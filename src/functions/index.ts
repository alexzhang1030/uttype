import type { Recordable } from '../types'

export function entries<T extends Recordable>(obj: T): [keyof T, T[keyof T]][] {
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

export function oneOf<T extends unknown[] = unknown[]>(value: T[number], values: T): value is T[number] {
  return values.includes(value)
}

export function debounce<F extends (...args: any[]) => any>(func: F, wait: number): F {
  let timeout: ReturnType<typeof setTimeout> | null

  return ((...args: Parameters<F>) => {
    const later = () => {
      timeout = null
      func.apply(args)
    }

    if (timeout)
      clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }) as F
}

export function throttle<F extends (...args: any[]) => any>(func: F, limit: number): F {
  let inThrottle: boolean
  return ((...args: Parameters<F>) => {
    if (!inThrottle) {
      func.apply(args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }) as F
}
