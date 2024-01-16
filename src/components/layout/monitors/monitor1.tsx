import type { FunctionComponent } from "@/src/common/types";
import { StatusCard } from "../../cards";
import Typography from "../../ui/default-typography";
import { MyMap } from "../../ui/default-map";
// import logger from "../../../libs/logger";
import { countStatus } from "../../../utils/arrayUtils";
import { useEffect, useState } from "react";
import { IWimStatusResponse } from "@/src/types/response";
import Skeleton from "../../ui/default-skeleton";
import logoGBU from "../../../../public/dithub.svg";
import logoVGT from "../../../../public/visi_baru.svg";
import VerticalStatus from "./items/monitor1/vertical-status";
// import { IWimStatusResponse } from "@/src/types/response";

interface MonitorTopLeftProps {
	selectedSiteMapHook: React.Dispatch<
		React.SetStateAction<IWimStatusResponse | null>
	>;
	selectedSite: IWimStatusResponse | null;
	listMergedSiteData: any[];
	isLoading: boolean;
	isUppkb?: boolean;
}

const MonitorTopLeft = ({
	selectedSite,
	selectedSiteMapHook,
	listMergedSiteData,
	isLoading,
	isUppkb,
}: MonitorTopLeftProps): FunctionComponent => {
	const [countOk, setCountOk] = useState<number | string>(0);
	const [countWarning, setCountWarning] = useState<number | string>(0);
	const [countOff, setCountOff] = useState<number | string>(0);

	useEffect(() => {
		if (!selectedSite && listMergedSiteData) {
			selectedSiteMapHook(listMergedSiteData[0]);
		}
		if (listMergedSiteData) {
			setCountOff(countStatus(listMergedSiteData, "red"));
			setCountOk(countStatus(listMergedSiteData, "green"));
			setCountWarning(countStatus(listMergedSiteData, "orange"));
		} else {
			setCountOff("error");
			setCountOk("error");
			setCountWarning("error");
		}
	}, [listMergedSiteData]);

	return (
		<>
			{/* Monitor 1 */}
			<div className="grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title and logo */}
				<div className="w-full col-span-1 border-r-2 border-gray-300 flex h-full items-center justify-center px-20 py-20">
					<img src={logoGBU} alt="Logo-dithub-2" />
				</div>
				<div className="w-full text-center col-span-2 h-full flex items-center justify-center">
					<Typography variant="j1" className="text-7xl">
						WIM Monitoring
					</Typography>
				</div>
				<div className="w-full col-span-1 border-r-2 border-gray-300 flex h-full items-center justify-center">
					<img
						src={logoVGT}
						alt="Logo-VGT-1"
						className="object-cover ml-14 w-64 h-20"
					/>
				</div>
				{/* map */}
				<div className="col-span-3 row-span-4 text-center h-full">
					<MyMap
						isUppkb={isUppkb}
						isLoading={isLoading}
						markers={listMergedSiteData}
						selectedSiteMapHook={selectedSiteMapHook}
					/>
				</div>
				<div className="col-span-1 row-span-7 shadow-md m-2 rounded-lg">
					{/* status */}
					<VerticalStatus selectedSite={selectedSite} isLoading={isLoading} />
				</div>
				{/* ok status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="ok"
						className="bg-white h-full w-full flex flex-col gap-3"
					>
						<Typography variant="j1" className="text-center text-7xl">
							OK
						</Typography>
						<div className="border-t border-gray-500 flex-grow text-center">
							{isLoading ? (
								<Skeleton className="h-full w-full" />
							) : (
								<Typography variant="j1" className="text-center text-7xl mt-16">
									{countOk}
								</Typography>
							)}
						</div>
					</StatusCard>
				</div>
				{/* warning status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="warning"
						className="bg-white h-full w-full flex flex-col gap-3"
					>
						<Typography variant="j1" className="text-center text-7xl">
							PERINGATAN
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							{isLoading ? (
								<Skeleton className="h-full w-full" />
							) : (
								<Typography variant="j1" className="text-center text-7xl mt-16">
									{countWarning}
								</Typography>
							)}
						</div>
					</StatusCard>
				</div>
				{/* on off status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="off"
						className="bg-white h-full w-full flex flex-col gap-3"
					>
						<Typography variant="j1" className="text-center text-7xl">
							MATI
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							{isLoading ? (
								<Skeleton className="h-full w-full" />
							) : (
								<Typography variant="j1" className="text-center text-7xl mt-16">
									{countOff}
								</Typography>
							)}
						</div>
					</StatusCard>
				</div>
			</div>
		</>
	);
};

export default MonitorTopLeft;
