import { Chain } from "./Chain";

export function testChain<A, B, C>(
  ma: Chain<A>,
  f: (a: A) => Chain<B>,
  g: (b: B) => Chain<C>
) {
  // Test associativity
  expect(ma.chain(f).chain(g)).toEqual(ma.chain((a) => f(a)).chain(g));
}
