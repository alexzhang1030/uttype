/**
 * @description Assert type if it is true
 * @example
 *
 * ```ts
 * AssertTrue<true, string>
 * // ^? string
 * AssertTrue<false, string>
 * // ^? never
 * AssertTrue<false, string, boolean>
 * // ^? boolean
 * ```
 *
 */
export type AssertTrue<T extends boolean, TrueType, FalseType = never> = T extends true ? TrueType : FalseType

/**
 * @description Assert type if it is false
 * @example
 *
 * ```ts
 * AssertFalse<true, string>
 * // ^? never
 * AssertFalse<false, string>
 * // ^? string
 * AssertFalse<false, string, boolean>
 * // ^? string
 * ```
 *
 */
export type AssertFalse<T extends boolean, TrueType, FalseType = never> = T extends false ? TrueType : FalseType

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
