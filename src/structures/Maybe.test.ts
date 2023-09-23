import { Maybe } from "./Maybe";
import { testIdentity, testComposition } from "../algebras/Functor.test";
import { testLeftIdentity, testRightIdentity } from "../algebras/Monad.test";

describe("Maybe", () => {
  describe("functor", () => {
    const maybeNum = Maybe.Some(42);

    test("identity", () => {
      testIdentity(maybeNum);
    });

    test("composition", () => {
      const double = (a: number) => a * 2;
      const third = (a: number) => a / 3;
      testComposition(maybeNum, double, third);
    });
  });

  describe("monad", () => {
    const maybeStr = Maybe.Some("Hello world");

    test("left identity", () => {
      testLeftIdentity(Maybe, (a) => Maybe.None(), 42);
    });

    test("right identity", () => {
      testRightIdentity(Maybe, maybeStr);
    });
  });
});
