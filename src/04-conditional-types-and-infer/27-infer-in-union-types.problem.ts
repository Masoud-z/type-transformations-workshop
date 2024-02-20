import { TaskResult } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

// type GetParserResult<T> = T extends { parse: () => infer TFunction }
//   ? TFunction
//   : T extends { extract: () => infer TExtract }
//   ? TExtract
//   : T extends () => infer TReturn
//   ? TReturn
//   : never;

type GetParserResult<T> = T extends
  | { parse: () => infer TReturn }
  | { extract: () => infer TReturn }
  | (() => infer TReturn)
  ? TReturn
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];
