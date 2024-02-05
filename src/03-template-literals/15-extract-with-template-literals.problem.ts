import { Equal, Expect } from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";
type DynamicRoute = `${string}:${string}`;

type DynamicRoutes = Extract<Routes, DynamicRoute>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
