import { Monoid } from "./Monoid";

export interface Group<T> extends Monoid<T> {
  invert(): Group<T>;
}
