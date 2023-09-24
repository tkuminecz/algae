import { Apply } from "../algebras/Apply";
import { Functor } from "../algebras/Functor";
import { Monad } from "../algebras/Monad";

export abstract class Maybe<A>
  extends ADT<{ tag: "Some"; value: A } | { tag: "None" }>
  implements Functor<A>, Monad<A>
{
  // static Some<A>(a: A): Maybe<A> {
  //   return new Some(a);
  // }

  // static None<A>(): Maybe<A> {
  //   return new None<A>();
  // }

  static of<A>(t: NonNullable<A>): Maybe<A> {
    return Maybe.Some(t);
  }

  // abstract match<B>(cases: { Some: (a: A) => B; None: () => B }): B;

  isSome(): boolean {
    return this.match({
      Some: () => true,
      None: () => false,
    });
  }

  isNone(): boolean {
    return !this.isSome();
  }

  getOrElse(defaultValue: A): A {
    return this.match({
      Some: (a) => a,
      None: () => defaultValue,
    });
  }

  ap<B>(mf: Maybe<(a: A) => B>): Maybe<B> {
    return mf.chain((f) => this.map(f));
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

// class Some<A> extends Maybe<A> {
//   constructor(private readonly value: A) {
//     super();
//   }

//   match<B>(cases: { Some: (a: A) => B; None: () => B }): B {
//     return cases.Some(this.value);
//   }
// }

// class None<A> extends Maybe<A> {
//   match<B>(cases: { Some: (a: A) => B; None: () => B }): B {
//     return cases.None();
//   }
// }
