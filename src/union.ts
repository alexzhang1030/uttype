import type { AnyRecord } from './.internal'

/**
 * @description Get values fo a record to union
 * @example
 *
 * ```ts
 * RecordValues<{ name: string, age: number }>
 * // ^? string | number
 * ```
 *
 */
export type RecordValues<T extends AnyRecord> = {
  [K in keyof T]: T[K]
}[keyof T]
