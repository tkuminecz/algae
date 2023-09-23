import { Monad } from "./Monad";

export function testMonad<A, B>(
  M: { of(a: A): Monad<A> },
  ma: Monad<A>,
  f: (a: A) => Monad<B>,
  a: A
) {
  // Test left identity
  expect(M.of(a).chain(f)).toEqual(f(a));

  // Test right identity
  expect(ma.chain(M.of)).toEqual(ma);
}
