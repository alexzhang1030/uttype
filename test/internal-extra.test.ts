import type { Equal, Expect } from '@type-challenges/utils'
import type { OmitByType, PickByType } from '../src'
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
