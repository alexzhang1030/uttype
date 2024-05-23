import type { Equal, Expect } from '@type-challenges/utils'
import type { DeepPartial, DeepRequired, ExtractNonNullable, ExtractOptional, OmitByType, OmitKeys, OmitReadonly, PartialByKey, PickByType, PickReadonly, RequiredByKey } from '../../types'
import { describe } from './.internal'

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

describe('PickReadonlyTypes', () => {
  interface Source {
    readonly name: string
    age: number
    isMale: boolean
  }

  interface Expected {
    readonly name: string
  }

  type _case = Expect<
   Equal<PickReadonly<Source>, Expected>
  >
})

describe('OmitReadonlyTypes', () => {
  interface Source {
    readonly name: string
    age: number
    isMale: boolean
  }

  interface Expected {
    age: number
    isMale: boolean
  }

  type _case = Expect<
   Equal<OmitReadonly<Source>, Expected>
  >
})

describe('Deep partial', () => {
  interface Source {
    a: {
      b: {
        c: {
          d: string
        }
      }
    }
  }

  interface Expected {
    a?: {
      b?: {
        c?: {
          d?: string
        }
      }
    }
  }

  type _case = Expect<
   Equal<DeepPartial<Source>, Expected>
  >
})

describe('Extract optional', () => {
  interface Source {
    a?: string
    b: number
  }

  interface Expected {
    a?: string
  }

  type _case = Expect<
   Equal<ExtractOptional<Source>, Expected>
  >
})

describe('Deep required', () => {
  interface Source {
    a?: {
      b?: {
        c?: {
          d?: string
        }
      }
    }
  }

  interface Expected {
    a: {
      b: {
        c: {
          d: string
        }
      }
    }
  }

  type _case = Expect<
   Equal<DeepRequired<Source>, Expected>
  >
})

describe('Partial by keys', () => {
  interface TestCaseOne {
    name: string
    age: number
  }

  interface ExpectOne {
    name?: string
    age: number
  }

  type _caseOne = Expect<
    Equal<PartialByKey<TestCaseOne, 'name'>, ExpectOne>
  >

  interface TestCaseTwo {
    name: string
    foo: {
      bar: number
    }
  }

  interface ExpectTwo {
    name: string
    foo?: {
      bar?: number
    }
  }

  type _caseTwo = Expect<
    Equal<PartialByKey<TestCaseTwo, 'foo', true>, ExpectTwo>
  >
})

describe('Required by keys', () => {
  interface TestCaseOne {
    name?: string
    age: number
  }

  interface ExpectOne {
    name: string
    age: number
  }

  type _caseOne = Expect<
    Equal<RequiredByKey<TestCaseOne, 'name'>, ExpectOne>
  >

  interface TestCaseTwo {
    name?: string
    foo?: {
      bar?: number
    }
  }

  interface ExpectTwo {
    name?: string
    foo: {
      bar: number
    }
  }

  type _caseTwo = Expect<
    Equal<RequiredByKey<TestCaseTwo, 'foo', true>, ExpectTwo>
  >
})

describe('Omit union', () => {
  type Source = {
    name: string
    age: number
    isMale?: boolean
  } | {
    name: string
    age: number
    foo: number
  }

  type Expected = { isMale?: boolean } | { foo: number }

  type _case = Expect<
    Equal<OmitKeys<Source, 'name' | 'age'>, Expected>
  >

  type _case2 = Expect<
    Equal<OmitKeys<{
      name: string
      age: number
      foo: boolean
    }, 'name' | 'age'>, { foo: boolean }>
  >
})

describe('Extract non-nullable', () => {
  interface Source {
    name: string
    age: number | null
    isMale: boolean | null
  }

  interface Expected {
    name: string
  }

  type _case = Expect<
    Equal<ExtractNonNullable<Source>, Expected>
  >
})
