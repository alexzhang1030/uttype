import type { AssertFalse, AssertTrue } from './assert'

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
export type OmitByType<Type, OmitType> = OmitOrPickByType<Type, OmitType>

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
export type PickByType<Type, PickType> = OmitOrPickByType<Type, PickType, false>
