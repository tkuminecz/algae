export interface Setoid<T> {
  equals(t: T): boolean;
}
