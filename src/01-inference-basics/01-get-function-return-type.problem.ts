import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

type MyFunc = typeof myFunc;

type ReturnValue = ReturnType<MyFunc>;

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
