// import { getTypographyColorFromStatus } from "../../../../utils/colorPickerUtils";
import { FunctionComponent } from "../../../../../common/types";
import { IWimStatusResponse } from "../../../../../types/response";
import OnOffStatusLayout from "../../../on-off-status";

interface IMonitorTopRightOnOffSecondRowItems {
	isLoading: boolean;
	selectedSite: IWimStatusResponse;
}

const MonitorTopRightOnOffSecondRowItems = ({
	selectedSite,
	isLoading,
}: IMonitorTopRightOnOffSecondRowItems): FunctionComponent => {
	if (selectedSite) {
		//
	}
	return (
		<>
			{/* Wim Logic */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Wim Strip 1"
				className="-mt-10 -mb-6"
				value={"-"}
				color={"primary"}
			/>

			{/* Camera */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="WIM Strip 2"
				className="-mt-10 -mb-6"
				value={"-"}
				color={"primary"}
			/>

			{/* Wim App */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Loop 1"
				className="-mt-10 -mb-6"
				value={"-"}
				color={"primary"}
			/>

			{/* VPN App */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Loop 2"
				className="-mt-10 -mb-6"
				value={"-"}
				color={"primary"}
			/>
		</>
	);
};

export default MonitorTopRightOnOffSecondRowItems;
