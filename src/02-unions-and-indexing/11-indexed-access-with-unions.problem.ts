import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type ProgramModeEnumMapType = typeof programModeEnumMap;
type ProgramModeEnumMapKeysType = keyof ProgramModeEnumMapType;

type ExcludedProgramModeEnumMapType = Exclude<
  ProgramModeEnumMapKeysType,
  "GROUP" | "ANNOUNCEMENT"
>;
// export type IndividualProgram =
//   ProgramModeEnumMapType[ExcludedProgramModeEnumMapType];

export type IndividualProgram = (typeof programModeEnumMap)[Exclude<
  keyof typeof programModeEnumMap,
  "GROUP" | "ANNOUNCEMENT"
>];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >
];
