export interface Foldable<T> {
  reduce<U>(f: (u: U, t: T) => U, initial: U): U;
}
