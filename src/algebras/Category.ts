import { Semigroupoid } from "./Semigroupoid";

export interface Category<T> extends Semigroupoid<T> {
  id(): Category<T>;
}
