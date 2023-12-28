import { IWimStatusResponse } from "../../../../../types/response";
import { GaugeLayout } from "../../..";
import { getColorFromStatus } from "../../../../utils/colorPickerUtils";
import { formatNumberWithTwoDecimals } from "../../../../utils/numberUtils";
import { getNerworkBytes } from "../../../../../utils/bytesUtils";
// import NetworkGaugeMeter from "../../charts/gauge/network-gauge";
import NetworkGaugeLayout from "../../../network-gauge";
import { FunctionComponent } from "@/src/common/types";

interface IMonitorTopRightGaugeItems {
	isLoading: boolean;
	selectedSite: IWimStatusResponse;
}

const MonitorTopRightGaugeItems = ({
	selectedSite,
	isLoading,
}: IMonitorTopRightGaugeItems): FunctionComponent => {
	const network = getNerworkBytes(selectedSite?.network.download || "-");

	const calculateScale = (dataSize: number) => {
		if (dataSize <= 1024) {
			return { min: 0, max: 1024, unit: "KB" }; // Scale for data sizes up to 1 KB
		} else if (dataSize <= 1024 * 1024) {
			return { min: 0, max: 1024, unit: "MB" }; // Scale for data sizes up to 1 MB
		} else {
			return { min: 0, max: dataSize, unit: "MB" }; // Scale for larger data sizes
		}
	};

	const initialScale = calculateScale(
		(selectedSite?.network.download as number) || 0
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
				value={formatNumberWithTwoDecimals(network.value)}
				slidercolor={getColorFromStatus(selectedSite.network.status)}
				textcolor="danger"
				quotaday="99 hari"
				onoff={selectedSite.network.status === "OFF"}
				textSuffix={network.unit || ""}
				textPrefix=""
				min={initialScale.min}
				max={initialScale.max}
			/>
		</>
	);
};

export default MonitorTopRightGaugeItems;
