import type { AssertFalse, AssertTrue } from './assert'
import type { AnyRecord, IfEquals } from './.internal'

type OmitOrPickByType<Source, Type, Omit extends boolean = true> = Pick<Source,
  {
    [K in keyof Source]: Source[K] extends Type ?
      AssertFalse<Omit, K> : AssertTrue<Omit, K>
  }[keyof Source]
>

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
 * PickReadonlyTypes<{ readonly name: string, age: number }>
 * // ^? { readonly name: string }
 * ```
 */
export type PickReadonly<T extends AnyRecord> = Pick<T, ReadonlyKeys<T>>

/**
 * @description Omit readonly types
 * @example
 *
 * ```ts
 * PickReadonlyTypes<{ readonly name: string, age: number }>
 * // ^? { age: number }
 * ```
 */
export type OmitReadonly<T extends AnyRecord> = Omit<T, ReadonlyKeys<T>>
