export * from './builtin-extra'
export * from './assert'
export * from './union'

export type Recordable<T = unknown> = Record<PropertyKey, T>

export type NormalRecordable<T = any> = Record<string, T>
