import { Extend } from "./Extend";

export interface Comonad<A> extends Extend<A> {
  extract<U>(): U;
}
