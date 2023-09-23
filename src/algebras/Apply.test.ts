import { Apply } from "./Apply";

export function testApply<A, B, C>(
  a: Apply<A>,
  u: Apply<(a: A) => B>,
  v: Apply<(b: B) => C>
) {
  // Test composition
  const step1 = v.map(
    (f: (b: B) => C) => (g: (a: A) => B) => (x: A) => f(g(x))
  ) as Apply<(g: (a: A) => B) => (x: A) => C>;
  const step2 = u.ap(step1);
  const lhs = a.ap(step2);
  const rhs = a.ap(u).ap(v);
  expect(lhs).toEqual(rhs);
}
