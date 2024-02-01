import { IWimStatusResponse } from "../../../src/types/response";
// import logger from "../../libs/logger";
// import { MapMarker } from "../../types/map-marker";
import { Map, Marker } from "pigeon-maps";
import Skeleton from "./default-skeleton";

interface MyMapInterface {
	markers?: any[];
	selectedSiteMapHook:
		| React.Dispatch<React.SetStateAction<IWimStatusResponse | null>>
		| undefined;
	isLoading: boolean;
	isUppkb?: boolean;
}

export function MyMap({
	markers,
	selectedSiteMapHook,
	isLoading,
	isUppkb,
}: MyMapInterface) {
	const uppkbDefaultCenter: [number, number] = [-1.462166, 119.9997402];
	const bukakaDefaultCenter: [number, number] = [-7.2022355, 110.7561662];
	const uppkbDefaultZoom = 5.45;
	const bukakaDefaultZoom = 6.5;
	if (isLoading) {
		return (
			<>
				<Skeleton className="h-full w-full" />
			</>
		);
	}
	return (
		<Map
			defaultCenter={isUppkb ? uppkbDefaultCenter : bukakaDefaultCenter}
			defaultZoom={isUppkb ? uppkbDefaultZoom : bukakaDefaultZoom}
			boxClassname="h-full w-full"
		>
			{markers &&
				markers.map((marker) => {
					return (
						<Marker
							key={marker.siteid}
							width={30}
							hover={true}
							anchor={[marker.sitelat, marker.sitelong]}
							color={marker.sitecolor}
							onClick={() => {
								selectedSiteMapHook && selectedSiteMapHook(marker);
							}}
						/>
					);
				})}
		</Map>
	);
}
