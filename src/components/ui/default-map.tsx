import { IWimStatusResponse } from "@/src/types/response";
import logger from "../../libs/logger";
// import { MapMarker } from "../../types/map-marker";
import { Map, Marker } from "pigeon-maps";

interface MyMapInterface {
	markers?: any[];
	selectedSiteMapHook: React.Dispatch<
		React.SetStateAction<IWimStatusResponse | null>
	>;
}

export function MyMap({ markers, selectedSiteMapHook }: MyMapInterface) {
	logger(markers);
	return (
		<Map
			defaultCenter={[-7.2022355, 110.7561662]}
			defaultZoom={6.5}
			boxClassname="h-full w-full"
		>
			{markers &&
				markers.map((marker) => {
					return (
						<Marker
							key={marker.siteid}
							width={30}
							anchor={[marker.sitelat, marker.sitelong]}
							color={marker.sitecolor}
							onClick={() => {
								selectedSiteMapHook(marker);
							}}
						/>
					);
				})}
		</Map>
	);
}
