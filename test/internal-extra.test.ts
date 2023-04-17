import type { Equal, Expect } from '@type-challenges/utils'
import type { AssertFalse, AssertTrue, OmitByType, PickByType } from '../src'
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

describe('OmitByType', () => {
  interface Source {
    name: string
    age: number
    isMale: boolean
  }

  interface Expected {
    age: number
  }

  type _case = Expect<
   Equal<OmitByType<Source, string | boolean>, Expected>
  >
})

describe('PickByType', () => {
  interface Source {
    name: string
    age: number
    isMale: boolean
  }

  interface Expected {
    name: string
    isMale: boolean
  }

  type _case = Expect<
   Equal<PickByType<Source, string | boolean>, Expected>
  >
})
