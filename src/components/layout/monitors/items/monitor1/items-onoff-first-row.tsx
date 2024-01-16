import { getTypographyColorFromStatus } from "../../../../utils/colorPickerUtils";
import { FunctionComponent } from "../../../../../common/types";
import { IWimStatusResponse } from "../../../../../types/response";
import OnOffStatusLayout from "../../../on-off-status";

interface IMonitorTopRightOnOffFirstRowItems {
	isLoading: boolean;
	selectedSite: IWimStatusResponse;
	isUppkb?: boolean;
}

const MonitorTopRightOnOffFirstRowItems = ({
	selectedSite,
	isLoading,
	// isUppkb,
}: IMonitorTopRightOnOffFirstRowItems): FunctionComponent => {
	return (
		<>
			{/* Wim Logic */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="CPU"
				className="-mt-10 -mb-6 row-span-1 border border-gray-400"
				value={selectedSite.cpu?.status || "OFF"}
				color={
					selectedSite.cpu?.status
						? getTypographyColorFromStatus(selectedSite.cpu?.status || "-")
						: "danger"
				}
			/>
			{/* Wim Logic */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Memory"
				className="-mt-10 -mb-6 row-span-1 border border-gray-400"
				value={selectedSite.memory?.status || "OFF"}
				color={
					selectedSite.memory?.status
						? getTypographyColorFromStatus(selectedSite.memory?.status || "-")
						: "danger"
				}
			/>
			{/* Wim Logic */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Disk"
				className="-mt-10 -mb-6 row-span-1 border border-gray-400"
				value={selectedSite.disk?.status || "OFF"}
				color={
					selectedSite.disk?.status
						? getTypographyColorFromStatus(selectedSite.disk?.status || "-")
						: "danger"
				}
			/>
			{/* Wim Logic */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Wim Logic"
				className="-mt-10 -mb-6 row-span-1 border border-gray-400"
				value={selectedSite?.ping?.wim_logic?.status || "-"}
				color={
					selectedSite?.ping?.wim_logic?.status
						? getTypographyColorFromStatus(
								selectedSite?.ping?.wim_logic?.status || "-"
							)
						: "danger"
				}
			/>

			{/* Camera */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Camera"
				className="-mt-10 -mb-6 row-span-1 border border-gray-400"
				value={selectedSite?.ping?.camera?.status || "-"}
				color={
					selectedSite?.ping?.camera?.status
						? getTypographyColorFromStatus(
								selectedSite?.ping?.camera?.status || "-"
							)
						: "danger"
				}
			/>

			{/* Wim App */}
			<OnOffStatusLayout
				isLoading={isLoading}
				title="Wim App"
				className="-mt-10 -mb-6 row-span-1 border border-gray-400"
				value={selectedSite?.app_process?.wim_app?.status || "-"}
				color={
					selectedSite?.app_process?.wim_app?.status
						? getTypographyColorFromStatus(
								selectedSite?.app_process?.wim_app?.status || "-"
							)
						: "danger"
				}
			/>
		</>
	);
};

export default MonitorTopRightOnOffFirstRowItems;
