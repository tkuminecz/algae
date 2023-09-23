import { Functor } from "./Functor";

export interface Apply<T> extends Functor<T> {
  ap<U>(b: Apply<(t: T) => U>): Apply<U>;
}
