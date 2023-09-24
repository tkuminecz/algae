import { Functor, Monad } from "../algebras";

export class Identity<A>
  extends ADT<{ tag: "id"; data: A }>
  implements Functor<A>, Monad<A>
{
  static id<T>(t: T): Identity<T> {
    return new this({ tag: "id", data: t });
  }

  ap<B>(mf: Identity<(a: A) => B>): Identity<B> {
    return mf.chain((f) => this.map(f));
  }

  map<B>(f: (a: A) => B): Identity<B> {
    return this.match({
      id: (a: A) => Identity.id(f(a)),
    });
  }

  chain<B>(next: (a: A) => Identity<B>): Identity<B> {
    return this.match({
      id: (a: A) => next(a),
    });
  }
}
