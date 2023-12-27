import { useState } from "react";
import type { FunctionComponent } from "../common/types";
import {
	MonitorBottomLeft,
	MonitorBottomRight,
	MonitorTopLeft,
	MonitorTopRight,
} from "../components/layout/monitors";
// import { MapMarker } from "../types/map-marker";
// import logger from "../libs/logger";
import { useSiteStatus } from "../hooks/use-swr";
import { IWimStatusResponse } from "../types/response";

const Home = (): FunctionComponent => {
	const [selectedSiteMap, setSelectedSiteMap] =
		useState<IWimStatusResponse | null>(null);

	const { data, isValidating } = useSiteStatus();

	if (isValidating) {
		return <></>;
	}

	// logger(data);
	return (
		<main className="w-screen h-screen">
			<div className="flex flex-col min-w-fit min-h-fit max-w-screen 4xl:grid 4xl:grid-cols-2 4xl:grid-rows-2 4xl:w-full 4xl:h-full">
				<MonitorTopLeft
					selectedSiteMapHook={setSelectedSiteMap}
					listSiteData={(data as IWimStatusResponse[]) || null}
				/>
				<MonitorTopRight selectedSite={selectedSiteMap} />
				<MonitorBottomLeft />
				<MonitorBottomRight />
			</div>
		</main>
	);
};

export default Home;
