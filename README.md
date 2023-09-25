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

- `PartialByKey`

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

- `debounce`

```ts
function debounce<F extends (...args: any[]) => any>(func: F, wait: number): F
```

- `throttle`

```ts
function throttle<F extends (...args: any[]) => any>(func: F, limit: number): F
```

- `loop`

```ts
function loop<T>(arr: T[], callback: (item: T, index: number) => void): void
```

- `rangeLoop`

```ts
function rangeLoop(start: number, end: number, callback: (index: number) => void): void
```

- `loopAsync`

```ts
function loopAsync<T>(arr: T[], callback: (item: T, index: number) => Promise<void>): void
```

## License

MIT
