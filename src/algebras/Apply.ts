import { Functor } from "./Functor";

export interface Apply<A> extends Functor<A> {
  ap<B>(f: Apply<(a: A) => B>): Apply<B>;
}
