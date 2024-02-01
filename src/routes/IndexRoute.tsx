import { Route } from "@tanstack/router";
import Home from "../pages/v2/Home";
import { rootRoute } from "./RootRoute";

export const IndexRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/",
	component: Home,
});
