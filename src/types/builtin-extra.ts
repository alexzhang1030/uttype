import type { AnyRecord, IfEquals } from './.internal'
import type { AssertFalse, AssertTrue } from './assert'
import type { Prettify } from './index'

type OmitOrPickByType<Source, Type, Omit extends boolean = true> = Pick<Source, {
  [K in keyof Source]: Source[K] extends Type ?
    AssertFalse<Omit, K> : AssertTrue<Omit, K>
}[keyof Source]>

/**
 * @description Omit by given type
 * @example
 *
 * ```ts
 * OmitByType<{ name: string, age: number }, number>
 * // ^? { name: string }
 * ```
 *
 */
export type OmitByType<Type extends AnyRecord, OmitType> = OmitOrPickByType<Type, OmitType>

/**
 * @description Pick by given type
 * @example
 *
 * ```ts
 * PickByType<{ name: string, age: number }, string>
 * // ^? { name: string }
 * ```
 *
 */
export type PickByType<Type extends AnyRecord, PickType> = OmitOrPickByType<Type, PickType, false>

type ReadonlyKeys<T extends AnyRecord> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >
}[keyof T]

/**
 * @description Pick readonly types
 * @example
 *
 * ```ts
 * PickReadonly<{ readonly name: string, age: number }>
 * // ^? { readonly name: string }
 * ```
 */
export type PickReadonly<T extends AnyRecord> = Pick<T, ReadonlyKeys<T>>

/**
 * @description Omit readonly types
 * @example
 *
 * ```ts
 * OmitReadonly<{ readonly name: string, age: number }>
 * // ^? { age: number }
 * ```
 */
export type OmitReadonly<T extends AnyRecord> = Omit<T, ReadonlyKeys<T>>

/**
 * @description Partial by given keys
 * @example
 *
 * ```ts
 * PartialByKey<{ name: string, age: number }, 'name'>
 * // ^? { name?: string, age: number }
 *
 * PartialByKey<{ name: string, foo: { bar: number } }, 'foo', true>
 * // ^? { name: string, foo?: { bar?: number } }
 * ```
 */
export type PartialByKey<T extends AnyRecord, K extends keyof T, Deep extends boolean = false> = Prettify<Omit<T, K> & (Deep extends true ? DeepPartial<Pick<T, K>> : Partial<Pick<T, K>>)>

/**
 * @description Required by given keys
 * @example
 *
 * ```ts
 * RequiredByKey<{ name?: string, age: number }, 'name'>
 * // ^? { name: string, age: number }
 *
 * RequiredByKey<{ name?: string, foo?: { bar?: number } }, 'foo', true>
 * // ^? { name?: string, foo: { bar: number } }
 * ```
 */
export type RequiredByKey<T extends AnyRecord, K extends keyof T, Deep extends boolean = false> = Prettify<Omit<T, K> & (Deep extends true ? DeepRequired<Pick<T, K>> : Required<Pick<T, K>>)>

/**
 * @description Deep partial
 * @example
 *
 * ```ts
 * DeepPartial<{ name: string, age: number, info: { address: string } }>
 * // ^? { name?: string, age?: number, info?: { address?: string } }
 * ```
 */
export type DeepPartial<T> = T extends object ? Prettify<{ [P in keyof T]?: DeepPartial<T[P]>; }> : T

/**
 * @description Deep required
 * @example
 *
 * ```ts
 * DeepRequired<{ name?: string, age?: number, user?: { name?: string, number?: age } }>
 * // ^? { name: string, age: number, user: { name: string, number: age } }
 * ```
 */
export type DeepRequired<T> = T extends object ? Prettify<{ [P in keyof T]-?: DeepRequired<T[P]>; }> : T

/**
 * @description Extract Optional
 * @example
 *
 * ```ts
 * ExtractOptional<{ name: string, age?: number }>
 * // ^? { age?: number }
 * ```
 */
export type ExtractOptional<T extends object> = Prettify<Pick<T, Exclude<{
  [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T], undefined>>>

/**
 * @description Extract Non Nullable
 * @example
 *
 * ```ts
 * ExtractNonNullable<{ name: string, age: number | null }>
 * // ^? { name: string }
 * ```
 */
export type ExtractNonNullable<T extends object> = Prettify<Pick<T, Exclude<{
  [K in keyof T]: T extends Record<K, NonNullable<T[K]>>
    ? K
    : never
}[keyof T], undefined>>>

type OmitKeysHelper<T, K extends keyof any> = {
  [P in keyof T as Exclude<P, K>]: T[P]
}

/**
 * @description Omit keys (enhanced builtin omit)
 * @example
 *
 * ```ts
 * type Test = { name: string, foo: number } | { age: number, name: string }
 * OmitUnion<Test, 'name'>
 * // ^? { foo: number } | { age: number }
 *```
 */
export type OmitKeys<T, K extends keyof T> = T extends any ? Prettify<OmitKeysHelper<T, K>> : never
