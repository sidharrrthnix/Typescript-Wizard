import { expect, it } from "vitest";
import { T, U } from "vitest/dist/chunks/environment.C5eAp3K6";
import { Equal, Expect } from "../helpers/type-utils";

const returnBothOfWhatIPassIn = <T, U>(params: { a: T; b: U }) => {
  return {
    first: params.a,
    second: params.b,
  };
};

type Param<T, U> = {
  a: T;
  b: U;
};

const ret = (param: Param<T, U>) => {
  return {
    first: param.a,
    second: param.b,
  };
};

it("Should return an object where a -> first and b -> second", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  expect(result).toEqual({
    first: "a",
    second: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        first: string;
        second: number;
      }
    >
  >;
});
