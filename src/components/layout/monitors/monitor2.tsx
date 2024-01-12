import type { FunctionComponent } from "@/src/common/types";
// import GaugeMeter from "../../charts/gauge/gauge-meter";
import Typography from "../../ui/default-typography";
// import { MapMarker } from "@/src/types/map-marker";
import { MonitorEmptyState } from "./monitor-empty-state";
import { IWimStatusResponse } from "@/src/types/response";
// import NetworkGaugeMeter from "../../charts/gauge/network-gauge";
import MonitorTopRightGaugeItems from "./items/monitor2/items-gauge";
import MonitorTopRightOnOffFirstRowItems from "./items/monitor2/items-onoff-first-row";
// import MonitorTopRightOnOffSecondRowItems from "./items/monitor2/items-onoff-second-row";

// import logger from "../../../libs/logger";

interface MonitorTopRightProps {
	selectedSite: IWimStatusResponse | null;
	isLoading: boolean;
	isUppkb?: boolean;
}

const MonitorTopRight = ({
	selectedSite,
	isLoading,
	isUppkb,
}: MonitorTopRightProps): FunctionComponent => {
	return selectedSite ? (
		<>
			{/* monitor 2 - todo: sesuaikan rows nya, ini dibikin 7 biar bagus waktu di color-coded*/}
			<div className="grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title */}
				<div className="col-span-4 border-b">
					<Typography variant="j1" className="text-center text-5xl py-5">
						Site {selectedSite.sitename}
					</Typography>
				</div>

				<MonitorTopRightGaugeItems
					isUppkb={isUppkb || false}
					isLoading={isLoading}
					selectedSite={selectedSite}
				/>

				<MonitorTopRightOnOffFirstRowItems
					isLoading={isLoading}
					selectedSite={selectedSite}
					isUppkb={isUppkb}
				/>

				{/* <MonitorTopRightOnOffSecondRowItems
					isLoading={isLoading}
					selectedSite={selectedSite}
				/> */}
			</div>
		</>
	) : (
		<MonitorEmptyState />
	);
};

export default MonitorTopRight;
