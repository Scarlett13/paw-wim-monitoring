import { useEffect, useState } from "react";
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
import { dummyMarker } from "../types/map-marker";
import { findSiteObjectFromId, mergeObjectsArray } from "../utils/arrayUtils";
import { getKeyShortcut } from "../utils/keyPressedUtils";
// import { findSiteObjectFromId } from "../utils/arrayUtils";

const Home = (): FunctionComponent => {
	const [selectedSiteMap, setSelectedSiteMap] =
		useState<IWimStatusResponse | null>(null);
	const [mergedSite, setMergedSite] = useState<any[] | null>(null);

	const { data, isValidating } = useSiteStatus();

	useEffect(() => {
		const tempMergedSite = mergeObjectsArray(
			dummyMarker,
			(data as IWimStatusResponse[]) || null
		);

		setMergedSite(tempMergedSite);
	}, [dummyMarker, data]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// Access event properties such as event.key, event.code, etc.

			const mapperKey = getKeyShortcut(event.key);
			const datasitebykey = findSiteObjectFromId(mapperKey || "", mergedSite);
			if (datasitebykey && !isValidating) {
				setSelectedSiteMap(datasitebykey);
			}
		};

		// Attach the event listener when the component mounts
		window.addEventListener("keydown", handleKeyDown);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [mergedSite]); // The empty dependency array ensures that the effect runs only once on mount

	useEffect(() => {
		if (selectedSiteMap && mergedSite) {
			const currentsite = findSiteObjectFromId(
				selectedSiteMap.siteid,
				mergedSite as IWimStatusResponse[]
			);

			setSelectedSiteMap(currentsite || null);
		}
	}, [mergedSite]);

	return (
		<main className="w-screen h-screen">
			<div className="flex flex-col min-w-fit min-h-fit max-w-screen 4xl:grid 4xl:grid-cols-2 4xl:grid-rows-2 4xl:w-full 4xl:h-full">
				<MonitorTopLeft
					isLoading={isValidating}
					selectedSiteMapHook={setSelectedSiteMap}
					listMergedSiteData={(mergedSite as IWimStatusResponse[]) || null}
				/>
				<MonitorTopRight
					isLoading={isValidating}
					selectedSite={selectedSiteMap}
				/>
				<MonitorBottomLeft
					isLoading={isValidating}
					listMergedSiteData={(mergedSite as IWimStatusResponse[]) || null}
				/>
				<MonitorBottomRight />
			</div>
		</main>
	);
};

export default Home;
