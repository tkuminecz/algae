import { Functor } from "./Functor";

export interface Bifunctor<A, C> extends Functor<A> {
  bimap<B, D>(f: (a: A) => B, g: (c: C) => D): Bifunctor<B, D>;
}
