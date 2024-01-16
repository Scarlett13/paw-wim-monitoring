import type { FunctionComponent } from "@/src/common/types";
// import GaugeMeter from "../../charts/gauge/gauge-meter";
import Typography from "../../ui/default-typography";
// import { MapMarker } from "@/src/types/map-marker";
// import { MonitorEmptyState } from "./monitor-empty-state";
// import { IWimStatusResponse } from "@/src/types/response";
// import { GaugeLayout, OnOffStatusLayout } from "..";
// import {
// 	getColorFromStatus,
// 	getTypographyColorFromStatus,
// } from "../../utils/colorPickerUtils";
// import { formatNumberWithTwoDecimals } from "../../utils/numberUtils";
// import { getNerworkBytes } from "../../../utils/bytesUtils";
import { SimpleCard } from "../../cards";
import ProgressBarMeter from "../../charts/bar/progress-bar-meter";
import { IWimStatusResponse } from "@/src/types/response";
import { MonitorEmptyState } from "./monitor-empty-state";

interface MonitorTopRightProps {
	selectedSite : IWimStatusResponse | null;
}

const MonitorTopRight = ({selectedSite}:MonitorTopRightProps): FunctionComponent => {

	return selectedSite ?(
		<>
			{/* monitor 2 */}
			<div className="grid grid-cols-4 grid-rows-7 bottom-right bg-white h-screen w-screen 4xl:h-full 4xl:w-full">
				<div className="col-span-4 text-center mt-4 mr-3 ml-3">
					<SimpleCard className="shadow-lg border-solid border-4 border-slate-400">
						<Typography variant="j2" className="font-bold">
							Site {selectedSite?.sitename}
						</Typography>
					</SimpleCard>
				</div>
				<div className="flex items-center justify-center col-span-2 row-span-2 mt-5 mb-5">
					<SimpleCard className="w-full h-full mr-5 ml-5 flex items-center border-4 border-gray-200 shadow-lg cursor-pointer hover:bg-slate-100">
						<ProgressBarMeter interval={1000} deviceName="PC" />
					</SimpleCard>
				</div>

				<div className="flex items-center justify-center col-span-2 row-span-2 mt-5 mb-5">
					<SimpleCard className="w-full h-full mr-5 ml-5 flex items-center border-4 border-gray-200 shadow-lg cursor-pointer hover:bg-slate-100">
						<ProgressBarMeter interval={1500} deviceName="LIDAR" />
					</SimpleCard>
				</div>
				<div className="flex items-center justify-center col-span-2 row-span-2 mb-5">
					<SimpleCard className="w-full h-full mr-5 ml-5 flex items-center border-4 border-gray-200 shadow-lg cursor-pointer hover:bg-slate-100">
						<ProgressBarMeter interval={2000} deviceName="CAMERA" />
					</SimpleCard>
				</div>
				<div className="flex items-center justify-center col-span-2 row-span-2 mb-5">
					<SimpleCard className="w-full h-full mr-5 ml-5 flex items-center border-4 border-gray-200 shadow-lg cursor-pointer hover:bg-slate-100">
						<ProgressBarMeter interval={2500} deviceName="WIM" />
					</SimpleCard>
				</div>
				<div className="flex items-center justify-center col-span-2 row-span-2 mb-5">
					<SimpleCard className="w-full h-full mr-5 ml-5 flex items-center border-4 border-gray-200 shadow-lg cursor-pointer hover:bg-slate-100">
						<ProgressBarMeter interval={3000} deviceName="APP" />
					</SimpleCard>
				</div>
				<div className="flex items-center justify-center col-span-2 row-span-2 mb-5">
					<SimpleCard className="w-full h-full mr-5 ml-5 flex items-center border-4 border-gray-200 shadow-lg cursor-pointer hover:bg-slate-100">
						<ProgressBarMeter interval={3500} deviceName="INTERNET" />
					</SimpleCard>
				</div>
			</div>
		</>
	) : (<MonitorEmptyState/>);
};

export default MonitorTopRight;

// import type { FunctionComponent } from "@/src/common/types";
// // import GaugeMeter from "../../charts/gauge/gauge-meter";
// import Typography from "../../ui/default-typography";
// // import { MapMarker } from "@/src/types/map-marker";
// import { MonitorEmptyState } from "./monitor-empty-state";
// import { IWimStatusResponse } from "@/src/types/response";
// import { GaugeLayout, OnOffStatusLayout } from "..";
// import {
// 	getColorFromStatus,
// 	getTypographyColorFromStatus,
// } from "../../utils/colorPickerUtils";
// import { formatNumberWithTwoDecimals } from "../../utils/numberUtils";
// import { getNerworkBytes } from "../../../utils/bytesUtils";

// // import logger from "../../../libs/logger";

// interface MonitorTopRightProps {
// 	selectedSite: IWimStatusResponse | null;
// 	isLoading: boolean;
// }

// const MonitorTopRight = ({
// 	selectedSite,
// 	isLoading,
// }: MonitorTopRightProps): FunctionComponent => {
// 	const network = getNerworkBytes(selectedSite?.network.download || "-");

// 	return selectedSite ? (
// 		<>
// 			{/* monitor 2 - todo: sesuaikan rows nya, ini dibikin 7 biar bagus waktu di color-coded*/}
// 			<div className="grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
// 				{/* title */}
// 				<div className="col-span-4">
// 					<Typography variant="j1" className="text-center text-5xl py-5">
// 						Site {selectedSite.sitename}
// 					</Typography>
// 				</div>

// 				{/* CPU */}
// 				<GaugeLayout
// 					isLoading={isLoading}
// 					title="CPU"
// 					value={formatNumberWithTwoDecimals(
// 						selectedSite.cpu.processor_usage as number
// 					)}
// 					color={getColorFromStatus(selectedSite.cpu.status)}
// 					onoff={selectedSite.cpu.status === "OFF"}
// 					textSuffix="%"
// 					textPrefix=""
// 				/>

// 				{/* Memory */}
// 				<GaugeLayout
// 					isLoading={isLoading}
// 					title="MEMORY"
// 					value={formatNumberWithTwoDecimals(
// 						selectedSite.memory.usage_percent as number
// 					)}
// 					color={getColorFromStatus(selectedSite.memory.status)}
// 					onoff={selectedSite.memory.status === "OFF"}
// 					textSuffix="%"
// 					textPrefix=""
// 				/>

// 				{/* Disk */}
// 				<GaugeLayout
// 					isLoading={isLoading}
// 					title={`Disk Usage`}
// 					value={formatNumberWithTwoDecimals(
// 						selectedSite.disk.usage_percent as number
// 					)}
// 					color={getColorFromStatus(selectedSite.disk.status)}
// 					onoff={selectedSite.disk.status === "OFF"}
// 					textSuffix="%"
// 					textPrefix=""
// 				/>

// 				{/* Network */}
// 				<GaugeLayout
// 					isLoading={isLoading}
// 					title="Network"
// 					value={formatNumberWithTwoDecimals(network.value)}
// 					color={getColorFromStatus(selectedSite.network.status)}
// 					onoff={selectedSite.network.status === "OFF"}
// 					textSuffix={network.unit || ""}
// 					textPrefix=""
// 				/>

// 				{/* Wim Logic */}
// 				<OnOffStatusLayout
// 					isLoading={isLoading}
// 					title="Wim Logic Ping"
// 					value={selectedSite.ping.wim_logic.status}
// 					color={getTypographyColorFromStatus(
// 						selectedSite.ping.wim_logic.status
// 					)}
// 				/>

// 				{/* Camera */}
// 				<OnOffStatusLayout
// 					isLoading={isLoading}
// 					title="Camera Ping"
// 					value={selectedSite.ping.camera.status}
// 					color={getTypographyColorFromStatus(selectedSite.ping.camera.status)}
// 				/>

// 				{/* Wim App */}
// 				<OnOffStatusLayout
// 					isLoading={isLoading}
// 					title="Wim App"
// 					value={selectedSite.app_process.wim_app.status}
// 					color={getTypographyColorFromStatus(
// 						selectedSite.app_process.wim_app.status
// 					)}
// 				/>

// 				{/* VPN App */}
// 				<OnOffStatusLayout
// 					isLoading={isLoading}
// 					title="VPN App"
// 					value={selectedSite.app_process.vpn_app.status}
// 					color={getTypographyColorFromStatus(
// 						selectedSite.app_process.vpn_app.status
// 					)}
// 				/>
// 			</div>
// 		</>
// 	) : (
// 		<MonitorEmptyState />
// 	);
// };

// export default MonitorTopRight;
