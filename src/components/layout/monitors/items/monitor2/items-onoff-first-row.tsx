import { getTypographyColorFromStatus } from "../../../../utils/colorPickerUtils";
import { FunctionComponent } from "../../../../../common/types";
import { IWimStatusResponse } from "../../../../../types/response";
import OnOffStatusLayout from "../../../on-off-status";

interface IMonitorTopRightOnOffFirstRowItems {
	isLoading: boolean;
	selectedSite: IWimStatusResponse;
}

const MonitorTopRightOnOffFirstRowItems = ({
	selectedSite,
	isLoading,
}: IMonitorTopRightOnOffFirstRowItems): FunctionComponent => {
	return (
		<>
			{/* Wim Logic */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Wim Logic Ping"
				className="-mt-10 -mb-6"
				value={selectedSite.ping.wim_logic.status}
				color={getTypographyColorFromStatus(selectedSite.ping.wim_logic.status)}
			/>

			{/* Camera */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Camera Ping"
				className="-mt-10 -mb-6"
				value={selectedSite.ping.camera.status}
				color={getTypographyColorFromStatus(selectedSite.ping.camera.status)}
			/>

			{/* Wim App */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Wim App"
				className="-mt-10 -mb-6"
				value={selectedSite.app_process.wim_app.status}
				color={getTypographyColorFromStatus(
					selectedSite.app_process.wim_app.status
				)}
			/>

			{/* VPN App */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="VPN App"
				className="-mt-10 -mb-6"
				value={selectedSite.app_process.vpn_app.status}
				color={getTypographyColorFromStatus(
					selectedSite.app_process.vpn_app.status
				)}
			/>
		</>
	);
};

export default MonitorTopRightOnOffFirstRowItems;
