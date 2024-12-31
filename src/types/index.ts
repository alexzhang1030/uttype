export * from './assert'
export * from './builtin-extra'
export * from './union'

export type Recordable<T = unknown> = Record<PropertyKey, T>

export type NormalRecordable<T = any> = Record<string, T>

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {}

export type MaybePromise<T> = T | Promise<T>
export type Nullable<T> = T | null | undefined
