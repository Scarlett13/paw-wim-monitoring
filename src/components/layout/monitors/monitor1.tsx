import type { FunctionComponent } from "@/src/common/types";
import { SimpleCard, StatusCard } from "../../cards";
import Typography from "../../ui/default-typography";
import { MyMap } from "../../ui/default-map";
// import logger from "../../../libs/logger";
import { countStatus } from "../../../utils/arrayUtils";
import { useEffect, useState } from "react";
import { IWimStatusResponse } from "@/src/types/response";
import Skeleton from "../../ui/default-skeleton";
import Button from "../../buttons/default-button";
// import { useNavigate } from "@tanstack/router";
// import { IWimStatusResponse } from "@/src/types/response";

interface MonitorTopLeftProps {
	selectedSiteMapHook: React.Dispatch<
		React.SetStateAction<IWimStatusResponse | null>
	>;
	listMergedSiteData: any[];
	isLoading: boolean;
}

const MonitorTopLeft = ({
	selectedSiteMapHook,
	listMergedSiteData,
	isLoading,
}: MonitorTopLeftProps): FunctionComponent => {
	const [countOk, setCountOk] = useState<number | string>(0);
	const [countWarning, setCountWarning] = useState<number | string>(0);
	const [countOff, setCountOff] = useState<number | string>(0);

	useEffect(() => {
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

	// const [isClicked, setIsClicked] = useState(false);
	// const navigate = useNavigate()

	// const handleClick = () => {
	// 	setIsClicked((prevState) = !prevState);
	// 	if (!isClicked) {
	// 		navigate('../Table')
	// 	}
	// }

	return (
		<>
			{/* Monitor 1 */}
			<div className="grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title and logo */}
				<div className="w-full col-span-1 border-r-2 border-gray-300">
					<img
						src="../public/Logo-GBU-2.svg"
						alt="Logo-GBU-2"
						className="object-cover w-40 h-20"
					/>
				</div>
				<div className="w-full text-center col-span-2">
					<Typography variant="j1" className="mt-4">
						WIM Monitoring
					</Typography>
				</div>
				<div className="w-full text-center col-span-1 border-l-2 border-gray-500">
					<img
						src="../public/Logo-VGT-1.svg"
						alt="Logo-VGT-1"
						className="ml-16 object-cover w-44 h-20"
					/>
				</div>
				{/* map */}
				<div className="col-span-4 row-span-4 h-full">
					<div className="col-span-4 row-span-4 h-full">
						<div className="flex justify-end">
							<Button className="bg-black absolute z-10 rounded-full mt-2 mr-2">
								<SimpleCard>Togle button</SimpleCard>
							</Button>
						</div>
						<MyMap
							isLoading={isLoading}
							markers={listMergedSiteData}
							selectedSiteMapHook={selectedSiteMapHook}
						/>
					</div>
				</div>
				{/* ok status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="ok"
						className="bg-white h-full w-full flex flex-col gap-3 border-4 border-gray-300"
					>
						<Typography variant="j1" className="text-center">
							OK
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							{isLoading ? (
								<Skeleton className="h-full w-full" />
							) : (
								<Typography variant="j1" className="text-center text-7xl">
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
						className="bg-white h-full w-full flex flex-col gap-3 border-4 border-gray-300"
					>
						<Typography variant="j1" className="text-center">
							WARNING
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							{isLoading ? (
								<Skeleton className="h-full w-full" />
							) : (
								<Typography variant="j1" className="text-center text-7xl">
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
						className="bg-white h-full w-full flex flex-col gap-3 border-4 border-gray-300"
					>
						<Typography variant="j1" className="text-center">
							OFF
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							{isLoading ? (
								<Skeleton className="h-full w-full" />
							) : (
								<Typography variant="j1" className="text-center text-7xl">
									{countOff}
								</Typography>
							)}
						</div>
					</StatusCard>
				</div>
				{/* maintenance status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="maintenance"
						className="bg-white h-full w-full flex flex-col gap-3 border-4 border-gray-300"
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
