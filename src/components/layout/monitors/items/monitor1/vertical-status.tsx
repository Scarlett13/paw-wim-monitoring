import type { FunctionComponent } from "../../../../../common/types";
import Typography from "../../../../ui/default-typography";
import { IWimStatusResponse } from "../../../../../types/response";
// import { MonitorEmptyState } from "../../monitor-empty-state";
// import MonitorTopRightOnOffSecondRowItems from "../monitor2/items-onoff-second-row";
import MonitorTopRightOnOffFirstRowItems from "./items-onoff-first-row";

// import MonitorTopRightOnOffSecondRowItems from "./items/monitor2/items-onoff-second-row";

// import logger from "../../../libs/logger";

interface VerticalStatusProps {
	selectedSite: IWimStatusResponse | null;
	isLoading: boolean;
	isUppkb?: boolean;
}

const VerticalStatus = ({
	selectedSite,
	isLoading,
}: VerticalStatusProps): FunctionComponent => {
	if (!selectedSite) {
		return <></>;
	}
	console.log(selectedSite);
	return (
		<>
			{/* monitor 2 - todo: sesuaikan rows nya, ini dibikin 7 biar bagus waktu di color-coded*/}
			<div className="grid grid-cols-1 grid-rows-7 h-full w-full">
				{/* title */}
				<div className="col-span-1 border-b">
					<Typography variant="j1" className="text-center text-5xl py-5">
						Site {selectedSite?.sitename}
					</Typography>
				</div>

				<MonitorTopRightOnOffFirstRowItems
					isLoading={isLoading}
					selectedSite={selectedSite}
				/>
			</div>
		</>
	);
};

export default VerticalStatus;
