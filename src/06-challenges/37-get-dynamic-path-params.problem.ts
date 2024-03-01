import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

//+++++++My solution+++++++
// type SplitedPaths<T extends string> = S.Split<T, "/">[number];

// type IDs<T> = T extends `:${infer IdString}`
//   ? IdString extends `${string}${"id" | "Id"}${string}`
//     ? IdString
//     : never
//   : never;

// type ExtractPathParams<T extends string> = Record<IDs<SplitedPaths<T>>, string>;

//+++++++ Course Solution +++++++
type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, "/">[number] as K extends `:${infer P}`
    ? P
    : never]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
