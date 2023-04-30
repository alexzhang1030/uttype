import type { Equal, Expect } from '@type-challenges/utils'
import type { OmitByType, OmitReadonly, PickByType, PickReadonly } from '..'
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
