import type { Recordable } from '../types'

export function entries<T extends Recordable>(obj: T): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as any
}
