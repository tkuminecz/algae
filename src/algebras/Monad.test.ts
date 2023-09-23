import { Monad } from "./Monad";

export function testLeftIdentity<A, B>(
  M: { of(a: A): Monad<A> },
  f: (a: A) => Monad<B>,
  a: A
) {
  expect(M.of(a).chain(f)).toEqual(f(a));
}

export function testRightIdentity<A>(
  M: { of<A>(a: A): Monad<A> },
  ma: Monad<A>
) {
  expect(ma.chain(M.of)).toEqual(ma);
}
