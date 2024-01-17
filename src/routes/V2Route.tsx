import { Route } from "@tanstack/router";
import Home from "../pages/v1/Home";
import { rootRoute } from "./RootRoute";

export const V2Route = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/v2",
	component: Home,
});
