import type { FunctionComponent } from "@/src/common/types";
// import GaugeMeter from "../../charts/gauge/gauge-meter";
import Typography from "../../ui/default-typography";
// import { MapMarker } from "@/src/types/map-marker";
import { MonitorEmptyState } from "./monitor-empty-state";
import { IWimStatusResponse } from "@/src/types/response";
import { GaugeLayout, OnOffStatusLayout } from "..";
import {
	getColorFromStatus,
	getTypographyColorFromStatus,
} from "../../utils/colorPickerUtils";
import { formatNumberWithTwoDecimals } from "../../utils/numberUtils";
import { getNerworkBytes } from "../../../utils/bytesUtils";

// import logger from "../../../libs/logger";

interface MonitorTopRightProps {
	selectedSite: IWimStatusResponse | null;
	isLoading: boolean;
}

const MonitorTopRight = ({
	selectedSite,
	isLoading,
}: MonitorTopRightProps): FunctionComponent => {
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

	return selectedSite ? (
		<>
			{/* monitor 2 - todo: sesuaikan rows nya, ini dibikin 7 biar bagus waktu di color-coded*/}
			<div className="grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title */}
				<div className="col-span-4">
					<Typography variant="j1" className="text-center text-5xl py-5">
						Site {selectedSite.sitename}
					</Typography>
				</div>

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
					textSuffix="%"
					textPrefix=""
				/>

				{/* Network */}
				<GaugeLayout
					isLoading={isLoading}
					title="Network"
					value={formatNumberWithTwoDecimals(network.value)}
					color={getColorFromStatus(selectedSite.network.status)}
					onoff={selectedSite.network.status === "OFF"}
					textSuffix={network.unit || ""}
					textPrefix=""
					min={initialScale.min}
					max={initialScale.max}
				/>

				{/* Wim Logic */}
				<OnOffStatusLayout
					isLoading={isLoading}
					title="Wim Logic Ping"
					value={selectedSite.ping.wim_logic.status}
					color={getTypographyColorFromStatus(
						selectedSite.ping.wim_logic.status
					)}
				/>

				{/* Camera */}
				<OnOffStatusLayout
					isLoading={isLoading}
					title="Camera Ping"
					value={selectedSite.ping.camera.status}
					color={getTypographyColorFromStatus(selectedSite.ping.camera.status)}
				/>

				{/* Wim App */}
				<OnOffStatusLayout
					isLoading={isLoading}
					title="Wim App"
					value={selectedSite.app_process.wim_app.status}
					color={getTypographyColorFromStatus(
						selectedSite.app_process.wim_app.status
					)}
				/>

				{/* VPN App */}
				<OnOffStatusLayout
					isLoading={isLoading}
					title="VPN App"
					value={selectedSite.app_process.vpn_app.status}
					color={getTypographyColorFromStatus(
						selectedSite.app_process.vpn_app.status
					)}
				/>
			</div>
		</>
	) : (
		<MonitorEmptyState />
	);
};

export default MonitorTopRight;
