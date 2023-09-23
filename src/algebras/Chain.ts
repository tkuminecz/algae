import { Apply } from "./Apply";

export interface Chain<T> extends Apply<T> {
  chain<U>(next: (t: T) => Chain<U>): Chain<U>;
}
