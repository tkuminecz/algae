import { Maybe } from "./Maybe";
import { testFunctor } from "../algebras/Functor.test";
import { testApply } from "../algebras/Apply.test";
import { testMonad } from "../algebras/Monad.test";

describe("Maybe", () => {
  test("isSome", () => {
    expect(Maybe.Some(42).isSome()).toBe(true);
    expect(Maybe.None().isSome()).toBe(false);
  });
  test("isNone", () => {
    expect(Maybe.Some(42).isNone()).toBe(false);
    expect(Maybe.None().isNone()).toBe(true);
  });

  test("getOrElse", () => {
    expect(Maybe.Some(42).getOrElse(-3.14)).toBe(42);
    expect(Maybe.None().getOrElse(-3.14)).toBe(-3.14);
  });

  test("functor", () => {
    const maybeNum = Maybe.Some(42);
    const double = (a: number) => a * 2;
    const toString = (a: number) => a.toString();
    testFunctor(maybeNum, double, toString);
  });

  test("apply", () => {
    testApply(
      Maybe.Some("hello world"),
      Maybe.Some((str) => str.length),
      Maybe.Some((len) => len / 2)
    );
  });

  test("monad", () => {
    const maybeStr = Maybe.Some("Hello world");
    testMonad(Maybe, maybeStr, (_a: string) => Maybe.None(), "yo");
  });
});
