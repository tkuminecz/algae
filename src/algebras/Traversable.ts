import { Applicative } from "./Applicative";
import { Foldable } from "./Foldable";
import { Functor } from "./Functor";

export interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse<A>(a: Applicative<A>, f: () => A): A;
}
