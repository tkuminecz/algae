import { Functor, Monad } from "../algebras";

export class Optional<A>
  extends ADT<{ tag: "Some"; value: A } | { tag: "None" }>
  implements Functor<A>, Monad<A> {}
