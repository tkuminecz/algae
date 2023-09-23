import { Functor } from "./Functor";

export interface Extend<T> extends Functor<T> {
  extend<U>(f: (e: Extend<T>) => U): Extend<U>;
}
