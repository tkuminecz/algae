export interface Semigroupoid<T> {
  compose(b: Semigroupoid<T>): Semigroupoid<T>;
}
