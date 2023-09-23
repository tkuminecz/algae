import { Functor } from "./Functor";

export interface Profunctor<B, C> extends Functor<B> {
  promap<A, D>(f: (a: A) => B, g: (c: C) => D): Profunctor<A, D>;
}
