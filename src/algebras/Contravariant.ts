export interface Contravariant<T> {
  contramap<U>(f: (u: U) => T): Contravariant<U>;
}
