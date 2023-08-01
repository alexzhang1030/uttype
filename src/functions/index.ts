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
