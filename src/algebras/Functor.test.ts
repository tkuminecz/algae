import { Functor } from "./Functor";

export function testIdentity<A>(fa: Functor<A>) {
  expect(fa.map((a) => a)).toEqual(fa);
}

export function testComposition<A>(
  fa: Functor<A>,
  f: (a: A) => A,
  g: (a: A) => A
) {
  expect(fa.map((a) => f(g(a)))).toEqual(fa.map(g).map(f));
}
