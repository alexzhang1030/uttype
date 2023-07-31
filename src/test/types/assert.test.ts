import type { Equal, Expect } from '@type-challenges/utils'
import type { AssertFalse, AssertTrue } from '../../types'
import { describe } from './.internal'

describe('AssertTrue', () => {
  type _cases = [
    Expect<Equal<AssertTrue<true, string>, string>>,
    Expect<Equal<AssertTrue<false, string>, never>>,
    Expect<Equal<AssertTrue<true, boolean, string>, boolean>>,
  ]
})

describe('AssertFalse', () => {
  type _cases = [
    Expect<Equal<AssertFalse<false, string>, string>>,
    Expect<Equal<AssertFalse<true, string>, never>>,
    Expect<Equal<AssertFalse<true, boolean, string>, string>>,
  ]
})
