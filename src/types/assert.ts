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
