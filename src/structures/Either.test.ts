import { testApply } from "../algebras/Apply.test";
import { testFunctor } from "../algebras/Functor.test";
import { testMonad } from "../algebras/Monad.test";
import { Either } from "./Either";

describe("Either", () => {
  test("isLeft", () => {
    expect(Either.Left("error").isLeft()).toBe(true);
    expect(Either.Right("not error").isLeft()).toBe(false);
  });

  test("isRight", () => {
    expect(Either.Right("not error").isRight()).toBe(true);
    expect(Either.Left("error").isRight()).toBe(false);
  });

  test("getOrElse", () => {
    expect(Either.Right("not error").getOrElse("error")).toBe("not error");
    expect(Either.Left("error").getOrElse("fallback")).toBe("fallback");
  });

  test("functor", () => {
    testFunctor(
      Either.of("hello world"),
      (str) => str.length,
      (len) => len * 2
    );
  });

  test("apply", () => {
    testApply(
      Either.of("hello world"),
      Either.of((str) => str.length),
      Either.of((len) => len * 2)
    );
  });

  test("monad", () => {
    const eitherStr = Either.of("hello world");
    testMonad<string, number>(Either, eitherStr, "yolo", (str) =>
      Either.Right(str.length)
    );
  });
});
