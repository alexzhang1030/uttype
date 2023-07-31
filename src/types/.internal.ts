export type AnyRecord = Record<PropertyKey, any>

export type IfEquals<CompareA, CompareB, IfEqual, IfNotEqual> =
  (<T>() => T extends CompareA ? 1 : 2) extends (<T>() => T extends CompareB ? 1 : 2) ? IfEqual : IfNotEqual
