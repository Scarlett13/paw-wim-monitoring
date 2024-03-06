import { FunctionComponent } from "../../common/types";
import {
	getIconFromStatusV2,
	getPingVariantFromStatusV2,
} from "../../utils/v2/number-utils-v2";
import PingCard from "../cards/ping-card";
import { GaugeLayout } from "../layout";
import Typography from "../ui/default-typography";
import { getColorFromStatus } from "../utils/colorPickerUtils";
import { formatNumberWithTwoDecimals } from "../utils/numberUtils";

interface IPcStatusDetail {
	isLoading: boolean;
	pcdata: any;
	isVpnAvailable: boolean;
}

const PcStatusDetail = ({
	isLoading,
	pcdata,
	isVpnAvailable,
}: IPcStatusDetail): FunctionComponent => {
	return pcdata && pcdata.length > 0 ? (
		<div className="flex flex-col w-full h-full gap-8">
			{pcdata.map((pc: any) => {
				return (
					<div key={pc.deviceId} className="flex flex-col h-full w-full">
						<Typography variant="h1"> {`${pc.deviceName} - `}</Typography>
						<div className="flex w-full flex-row">
							{pc.deviceStatus === "OFF" ? (
								<>
									{/* CPU */}
									<GaugeLayout
										isLoading={isLoading}
										title="CPU"
										value={0}
										color={getColorFromStatus("OFF")}
										onoff={true}
										textSuffix={""}
										textPrefix=""
									/>

									{/* Memory */}
									<GaugeLayout
										isLoading={isLoading}
										title="Memory"
										value={0}
										color={getColorFromStatus("OFF")}
										onoff={true}
										textSuffix={""}
										textPrefix=""
									/>

									{/* Disk */}
									<GaugeLayout
										isLoading={isLoading}
										title="Disk"
										value={0}
										color={getColorFromStatus("OFF")}
										onoff={true}
										textSuffix={""}
										textPrefix=""
									/>
									<div className="flex flex-col w-full gap-4">
										<PingCard
											label={"Wim App"}
											value={"OFF"}
											variant="danger"
											icon={getIconFromStatusV2(0)}
										/>
										{isVpnAvailable && (
											<PingCard
												label={"VPN App"}
												value={"OFF"}
												icon={getIconFromStatusV2(0)}
												variant="danger"
											/>
										)}
									</div>
								</>
							) : (
								<>
									{/* CPU */}
									<GaugeLayout
										isLoading={isLoading}
										title="CPU"
										value={formatNumberWithTwoDecimals(
											//@ts-ignore
											(pc?.deviceStatus?.cpu?.value as number) ?? 0
										)}
										color={getColorFromStatus(
											//@ts-ignore
											pc?.deviceStatus?.cpu?.status ?? "OFF"
										)}
										//@ts-ignore
										onoff={pc?.deviceStatus?.cpu?.status === "OFF" ?? true}
										textSuffix={
											//@ts-ignore
											pc?.deviceStatus?.cpu?.status === "OFF" ? "" : "%" ?? ""
										}
										textPrefix=""
									/>

									{/* Memory */}
									<GaugeLayout
										isLoading={isLoading}
										title="MEMORY"
										value={formatNumberWithTwoDecimals(
											//@ts-ignore
											(pc?.deviceStatus?.mem?.value as number) ?? 0
										)}
										color={getColorFromStatus(
											//@ts-ignore
											pc?.deviceStatus?.mem?.status ?? "OFF"
										)}
										//@ts-ignore
										onoff={pc?.deviceStatus?.mem?.status === "OFF" ?? true}
										textSuffix={
											//@ts-ignore
											pc?.deviceStatus?.mem?.status === "OFF" ? "" : "%" ?? ""
										}
										textPrefix=""
									/>

									{/* Disk */}
									<GaugeLayout
										isLoading={isLoading}
										title={`Disk Usage`}
										value={formatNumberWithTwoDecimals(
											//@ts-ignore
											(pc?.deviceStatus?.disk?.value as number) ?? 0
										)}
										color={getColorFromStatus(
											//@ts-ignore
											pc?.deviceStatus?.disk?.status ?? "OFF"
										)}
										//@ts-ignore
										onoff={pc?.deviceStatus?.disk?.status === "OFF" ?? true}
										textSuffix={
											//@ts-ignore
											pc?.deviceStatus?.disk?.status === "OFF" ? "" : "%" ?? ""
										}
										textPrefix=""
									/>

									<div className="flex flex-col w-full gap-4">
										<PingCard
											label={"Wim App"}
											value={pc?.deviceStatus?.wim_app?.status ?? "OFF"}
											variant={getPingVariantFromStatusV2(
												pc?.deviceStatus?.wim_app?.status ?? "OFF"
											)}
											icon={getIconFromStatusV2(
												pc?.deviceStatus?.wim_app?.status ?? "OFF"
											)}
										/>
										{isVpnAvailable && (
											<PingCard
												label={"VPN App"}
												value={pc?.deviceStatus?.vpn_app?.status ?? "OFF"}
												icon={getIconFromStatusV2(
													pc?.deviceStatus?.vpn_app?.status ?? "OFF"
												)}
												variant={getPingVariantFromStatusV2(
													pc?.deviceStatus?.vpn_app?.status ?? "OFF"
												)}
											/>
										)}
									</div>
								</>
							)}
						</div>
					</div>
				);
			})}
		</div>
	) : (
		<>PC DATA ERROR</>
	);
};

export default PcStatusDetail;
