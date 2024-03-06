import { Route } from "@tanstack/router";
import Home from "../pages/v2/Home";
import { rootRoute } from "./RootRoute";
import { z } from "zod";

const wimMonitoringFilterSchema = z.object({
	selectedSiteId: z.number().catch(1),
	projecttype: z.number().catch(0),
	selectedDevice: z
		.enum([
			"PC",
			"WIM Logic",
			"Lidar",
			"Camera LPR",
			"Camera CCTV",
			"NVR",
			"PC VMS",
			"Radio",
			"Switch",
			"Router",
			"Modem",
			"VMS",
			"Relay",
		])
		.catch("PC"),
	siteStatus: z.enum(["all", "warning", "normal", "off"]).catch("all"),
});

// type MonitoringFilter = z.infer<typeof wimMonitoringFilterSchema>

export const IndexRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/",
	component: Home,
	validateSearch: wimMonitoringFilterSchema,
});
