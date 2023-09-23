import { Chain } from "./Chain";

export interface ChainRec<A> extends Chain<A> {
  chainRec<B, C>(
    f: (next: (t: A) => C, done: (b: B) => C, value: A) => ChainRec<C>,
    i: A
  ): ChainRec<B>;
}
