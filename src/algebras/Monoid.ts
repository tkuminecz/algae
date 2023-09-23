import { Semigroupoid } from "./Semigroupoid";

export interface Monoid<T> extends Semigroupoid<T> {
  empty(): Monoid<T>;
}
