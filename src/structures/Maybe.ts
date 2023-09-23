import { Apply } from "../algebras/Apply";
import { Functor } from "../algebras/Functor";
import { Monad } from "../algebras/Monad";

export abstract class Maybe<A> implements Functor<A>, Monad<A> {
  static Some<A>(a: A) {
    return new Some(a);
  }

  static None<A>() {
    return new None<A>();
  }

  static of<A>(t: NonNullable<A>): Maybe<A> {
    return Maybe.Some(t);
  }

  abstract match<B>(cases: { Some: (a: A) => B; None: () => B }): B;

  ap<B>(mf: Maybe<(a: A) => B>): Maybe<B> {
    return mf.match({
      Some: (f) =>
        this.match({
          Some: (a) => Maybe.Some(f(a)),
          None: () => Maybe.None(),
        }),
      None: () => Maybe.None(),
    });
  }

  map<B>(f: (a: A) => B): Maybe<B> {
    return this.match({
      Some: (a) => Maybe.Some(f(a)),
      None: () => Maybe.None(),
    });
  }

  chain<U>(next: (t: A) => Maybe<U>): Maybe<U> {
    return this.match({
      Some: (a) => next(a),
      None: () => Maybe.None(),
    });
  }
}

class Some<A> extends Maybe<A> {
  constructor(private readonly value: A) {
    super();
  }

  match<B>(cases: { Some: (a: A) => B; None: () => B }): B {
    return cases.Some(this.value);
  }
}

class None<A> extends Maybe<A> {
  match<B>(cases: { Some: (a: A) => B; None: () => B }): B {
    return cases.None();
  }
}
