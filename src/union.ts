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
export type RecordValues<T extends Record<string, any>> = {
  [K in keyof T]: T[K]
}[keyof T]
