import { Functor } from "../algebras/Functor";
import { Monad } from "../algebras/Monad";

export abstract class Either<L, R> implements Functor<R>, Monad<R> {
  static Left<L, R>(left: L): Either<L, R> {
    return new Left(left);
  }

  static Right<L, R>(right: R): Either<L, R> {
    return new Right(right);
  }

  static of<L, R>(right: R): Either<L, R> {
    return Either.Right(right);
  }

  abstract match<B>(cases: { Left: (left: L) => B; Right: (right: R) => B }): B;

  isLeft() {
    return this.match({
      Left: () => true,
      Right: () => false,
    });
  }

  isRight() {
    return !this.isLeft();
  }

  getOrElse(defaultValue: R): R {
    return this.match({
      Left: () => defaultValue,
      Right: (right) => right,
    });
  }

  ap<U>(b: Either<L, (t: R) => U>): Either<L, U> {
    return b.chain((f) => this.map(f));
  }

  map<B>(f: (a: R) => B): Either<L, B> {
    return this.match({
      Left: (left) => Either.Left(left),
      Right: (right) => Either.Right(f(right)),
    });
  }

  chain<U>(next: (t: R) => Either<L, U>): Either<L, U> {
    return this.match({
      Left: (left) => Either.Left(left),
      Right: (right) => next(right),
    });
  }
}

class Left<L, R> extends Either<L, R> {
  constructor(private readonly left: L) {
    super();
  }

  match<B>(cases: { Left: (left: L) => B; Right: (right: R) => B }): B {
    return cases.Left(this.left);
  }
}

class Right<L, R> extends Either<L, R> {
  constructor(private readonly right: R) {
    super();
  }

  match<B>(cases: { Left: (left: L) => B; Right: (right: R) => B }): B {
    return cases.Right(this.right);
  }
}
