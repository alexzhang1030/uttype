# uttype 

Tiny helper library with some useful functions / types.

## Types

assert

- `AssertTrue`
- `AssertFalse`

built-in extra

- `OmitByType`
- `PickByType`

- `PickReadonly`
- `OmitReadonly`

union

- `RecordValues`

## Functions

- `entries`

```ts
function entries<T extends Recordable>(obj: T): [keyof T, T[keyof T]][]
```

- `entriesFind`

```ts
function entriesFind<T extends Recordable = Recordable>(obj: T, predicate: (item: [keyof T, T[keyof T]]) => boolean): [keyof T, T[keyof T]] | undefined
```

- `oneOf`

```ts
function oneOf<T extends unknown[] = unknown[]>(value: T[number], values: T): value is T[number]
```

## License

MIT
