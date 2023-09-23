export interface Semigroup<T> {
  concat(t: T): Semigroup<T>;
}
