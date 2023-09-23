import { Setoid } from "./Setoid";

export interface Ord<T> extends Setoid<T> {
  lte(t: T): boolean;
}
