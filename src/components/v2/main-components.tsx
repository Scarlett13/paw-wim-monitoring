import { useEffect, useState } from "react";
import { FunctionComponent } from "../../common/types";
import { MyMap } from "../ui/default-map";
import { useSwrV2 } from "../../hooks/use-swr";
import { MapMarker } from "../../types/map-marker";
import { getSiteColorFromStatusV2 } from "../../utils/v2/number-utils-v2";
import useSiteList from "../../hooks/use-site";
// import { useSearch } from "@tanstack/router";
// import { IndexRoute } from "../../routes/IndexRoute";

const MainComponents = ({}): FunctionComponent => {
	// const { projecttype, selectedSiteId } = useSearch({
	// 	from: IndexRoute.fullPath,
	// });

	const [siteMarker, setSiteMarker] = useState<MapMarker[]>([]);

	const { isValidating } = useSwrV2();

	const { sortedSite } = useSiteList();

	useEffect(() => {
		if (sortedSite) {
			setSiteMarker([]);
			const tempSiteMarkerData: MapMarker[] = [];
			for (const site of sortedSite as any) {
				tempSiteMarkerData.push({
					siteid: site.siteId,
					sitename: site.siteName,
					sitelat: +site.siteLat,
					sitelong: +site.siteLong,
					sitecolor: getSiteColorFromStatusV2(site.siteStatus),
				});
			}

			setSiteMarker(tempSiteMarkerData);
		}
	}, [sortedSite]);

	return (
		<>
			<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-4/6 bg-purple-300">
				<MyMap
					isUppkb={true}
					isLoading={isValidating}
					markers={siteMarker}
					selectedSiteMapHook={undefined}
				/>
			</div>
		</>
	);
};

export default MainComponents;
