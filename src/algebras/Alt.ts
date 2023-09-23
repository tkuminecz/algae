import { Functor } from "./Functor";

export interface Alt<T> extends Functor<T> {
  alt(b: Alt<T>): Alt<T>;
}
