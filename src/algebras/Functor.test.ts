import { Functor } from "./Functor";

export function testFunctor<A, B, C>(
  fa: Functor<A>,
  f: (a: A) => B,
  g: (b: B) => C
) {
  // Test identity
  expect(fa.map((a) => a)).toEqual(fa);

  // Test composition
  expect(fa.map((a) => g(f(a)))).toEqual(fa.map(f).map(g));
}
