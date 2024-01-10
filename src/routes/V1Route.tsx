import { Route } from "@tanstack/router";
import Home from "../pages/v1/Home";
import { rootRoute } from "./RootRoute";
import Uppkb from "../pages/v1/Uppkb";

// export const V1Route = new Route({
// 	getParentRoute: (): typeof rootRoute => rootRoute,
// 	path: "/v1",
// 	component: Home,
// });

export const V1BukakaRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/v1/bukaka",
	component: Home,
});

export const V1UppkbRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/v1/uppkb",
	component: Uppkb,
});
