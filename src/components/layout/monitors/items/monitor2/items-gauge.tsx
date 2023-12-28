import { IWimStatusResponse } from "../../../../../types/response";
import { GaugeLayout } from "../../..";
import {
	getColorFromStatus,
	getTypographyColorFromStatus,
} from "../../../../utils/colorPickerUtils";
import { formatNumberWithTwoDecimals } from "../../../../utils/numberUtils";
// import { getNerworkBytes } from "../../../../../utils/bytesUtils";
// import NetworkGaugeMeter from "../../charts/gauge/network-gauge";
import NetworkGaugeLayout from "../../../network-gauge";
import { FunctionComponent } from "../../../../../common/types";
import {
	calculateDaysDifference,
	createCustomTimeZoneDate,
} from "../../../../../utils/dateUtils";

interface IMonitorTopRightGaugeItems {
	isLoading: boolean;
	selectedSite: IWimStatusResponse;
}

const MonitorTopRightGaugeItems = ({
	selectedSite,
	isLoading,
}: IMonitorTopRightGaugeItems): FunctionComponent => {
	const quotavalue =
		(selectedSite.orbit_data.quota_value as number) / 1024 / 1024 || 0;

	const quotalimit =
		(selectedSite.orbit_data.quota_limit as number) / 1024 / 1024 || 0;

	const datenow = createCustomTimeZoneDate("Asia/Bangkok");
	// console.log(datenow.toISO());
	const daydiff = calculateDaysDifference(
		new Date(selectedSite.orbit_data.end_time),
		new Date(datenow.toISO() ?? "")
	);
	return (
		<>
			{/* CPU */}
			<GaugeLayout
				isLoading={isLoading}
				title="CPU"
				value={formatNumberWithTwoDecimals(
					selectedSite.cpu.processor_usage as number
				)}
				color={getColorFromStatus(selectedSite.cpu.status)}
				onoff={selectedSite.cpu.status === "OFF"}
				textSuffix={selectedSite.cpu.status === "OFF" ? "" : "%"}
				textPrefix=""
			/>

			{/* Memory */}
			<GaugeLayout
				isLoading={isLoading}
				title="MEMORY"
				value={formatNumberWithTwoDecimals(
					selectedSite.memory.usage_percent as number
				)}
				color={getColorFromStatus(selectedSite.memory.status)}
				onoff={selectedSite.memory.status === "OFF"}
				textSuffix={selectedSite.memory.status === "OFF" ? "" : "%"}
				textPrefix=""
			/>

			{/* Disk */}
			<GaugeLayout
				isLoading={isLoading}
				title={`Disk Usage`}
				value={formatNumberWithTwoDecimals(
					selectedSite.disk.usage_percent as number
				)}
				color={getColorFromStatus(selectedSite.disk.status)}
				onoff={selectedSite.disk.status === "OFF"}
				textSuffix={selectedSite.disk.status === "OFF" ? "" : "%"}
				textPrefix=""
			/>

			{/* Network */}
			<NetworkGaugeLayout
				isLoading={isLoading}
				title="Orbit"
				value={formatNumberWithTwoDecimals(quotavalue || "OFF")}
				slidercolor={getColorFromStatus(
					selectedSite.orbit_data.quota_status || "OFF"
				)}
				textcolor={getTypographyColorFromStatus(
					selectedSite.orbit_data.end_time_status || "OFF"
				)}
				quotaday={`${daydiff} Hari`}
				onoff={selectedSite.network.status === "OFF"}
				textSuffix={"GB"}
				textPrefix=""
				min={0}
				max={quotalimit}
			/>
		</>
	);
};

export default MonitorTopRightGaugeItems;
