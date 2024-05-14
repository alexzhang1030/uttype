export * from './builtin-extra'
export * from './assert'
export * from './union'

export type Recordable<T = unknown> = Record<PropertyKey, T>

export type NormalRecordable<T = any> = Record<string, T>

export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line ts/ban-types
} & {}
