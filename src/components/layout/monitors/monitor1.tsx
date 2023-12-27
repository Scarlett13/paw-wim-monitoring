import type { FunctionComponent } from "@/src/common/types";
import { StatusCard } from "../../cards";
import Typography from "../../ui/default-typography";
import { MyMap } from "../../ui/default-map";

import { dummyMarker } from "../../../types/map-marker";
// import logger from "../../../libs/logger";
import {
	countStatus,
	findSiteObjectFromId,
	mergeObjectsArray,
} from "../../../utils/arrayUtils";
import { useEffect, useState } from "react";
import { IWimStatusResponse } from "@/src/types/response";
// import { IWimStatusResponse } from "@/src/types/response";

interface MonitorTopLeftProps {
	selectedSiteMapHook: React.Dispatch<
		React.SetStateAction<IWimStatusResponse | null>
	>;
	currentSelectedSite: IWimStatusResponse | null;
	listSiteData: any[];
}

const MonitorTopLeft = ({
	selectedSiteMapHook,
	currentSelectedSite,
	listSiteData,
}: MonitorTopLeftProps): FunctionComponent => {
	const [mergedSite, setMergedSite] = useState<any[] | null>(null);
	const [countOk, setCountOk] = useState<number | string>(0);
	const [countWarning, setCountWarning] = useState<number | string>(0);
	const [countOff, setCountOff] = useState<number | string>(0);

	useEffect(() => {
		const tempMergedSite = mergeObjectsArray(dummyMarker, listSiteData);

		if (tempMergedSite) {
			setCountOff(countStatus(tempMergedSite, "red"));
			setCountOk(countStatus(tempMergedSite, "green"));
			setCountWarning(countStatus(tempMergedSite, "orange"));
		} else {
			setCountOff("error");
			setCountOk("error");
			setCountWarning("error");
		}

		setMergedSite(tempMergedSite);
	}, [dummyMarker, listSiteData]);

	useEffect(() => {
		if (currentSelectedSite) {
			const currentsite = findSiteObjectFromId(
				currentSelectedSite.siteid,
				mergedSite as IWimStatusResponse[]
			);

			selectedSiteMapHook(currentsite || null);
		}
	}, [mergedSite]);

	if (!mergedSite) {
		return <></>;
	}

	return (
		<>
			{/* Monitor 1 */}
			<div className="grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title and logo */}
				<div className="bg-neutral-600 w-full text-center col-span-1">logo</div>
				<div className="bg-purple-600 w-full text-center col-span-2">title</div>
				<div className=" bg-pink-600 w-full text-center col-span-1">logo</div>
				{/* map */}
				<div className="col-span-4 row-span-4 bg-slate-900 text-amber-50 text-center h-full">
					<MyMap
						markers={mergedSite}
						selectedSiteMapHook={selectedSiteMapHook}
					/>
				</div>
				{/* ok status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="ok"
						className="bg-white h-full w-full flex flex-col gap-3"
					>
						<Typography variant="j1" className="text-center">
							OK
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							<Typography variant="j1" className="text-center text-7xl">
								{countOk}
							</Typography>
						</div>
					</StatusCard>
				</div>
				{/* warning status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="warning"
						className="bg-white h-full w-full flex flex-col gap-3"
					>
						<Typography variant="j1" className="text-center">
							WARNING
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							<Typography variant="j1" className="text-center text-7xl">
								{countWarning}
							</Typography>
						</div>
					</StatusCard>
				</div>
				{/* on off status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="off"
						className="bg-white h-full w-full flex flex-col gap-3"
					>
						<Typography variant="j1" className="text-center">
							OFF
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							<Typography variant="j1" className="text-center text-7xl">
								{countOff}
							</Typography>
						</div>
					</StatusCard>
				</div>
				{/* maintenance status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="maintenance"
						className="bg-white h-full w-full flex flex-col gap-3"
					>
						<Typography variant="j1" className="text-center">
							MT
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							<Typography variant="j1" className="text-center text-7xl">
								0
							</Typography>
						</div>
					</StatusCard>
				</div>
			</div>
		</>
	);
};

export default MonitorTopLeft;
