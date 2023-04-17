import type { Equal, Expect } from '@type-challenges/utils'
import type { RecordValues } from '../src/union'
import { describe } from './.internal'

describe('RecordValueUnion', () => {
  interface Foo {
    name: string
    age: number
  }
  type _case = Expect<Equal<RecordValues<Foo>, string | number>>
})
