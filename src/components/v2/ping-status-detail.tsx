import { useSearch } from "@tanstack/router";
import {
	getIconFromStatusV2,
	getPingVariantFromStatusV2,
} from "../../utils/v2/number-utils-v2";
import PingCard from "../cards/ping-card";
import { IndexRoute } from "../../routes/IndexRoute";
import Typography from "../ui/default-typography";

interface IPingStatusDetail {
	isLoading: boolean;
	pingdata: any;
}

const PingStatusDetail = ({ pingdata }: IPingStatusDetail) => {
	const { selectedDevice } = useSearch({
		from: IndexRoute.fullPath,
	});
	console.log(pingdata);
	return pingdata && pingdata.length > 0 ? (
		<div className="flex flex-wrap w-full h-full gap-8">
			{pingdata.map((data: any) => {
				const parsedPing =
					data?.deviceStatus?.value ||
					data?.deviceStatus?.[data?.deviceName]?.value;

				const value = `${data?.deviceStatus?.value ?? "OFF"} - ${data?.deviceStatus?.value !== "NOT APPLICABLE" ? data?.ipAddress ?? "OFF" : ""}`;

				let labelName = data.deviceName;
				if (
					data?.deviceStatus?.postname &&
					!data.deviceStatus.postname.startsWith("Ruang")
				) {
					labelName += ` - ${data.deviceStatus.postname}`;
				}
				return (
					// <></>
					// <div key={data.deviceId} className="w-1/3 shadow-md max-h-content">
					<PingCard
						label={labelName}
						value={value}
						className="w-[15vw] shadow-md h-24"
						key={data.deviceId}
						icon={getIconFromStatusV2(data?.deviceStatus?.value ?? "OFF")}
						variant={getPingVariantFromStatusV2(parsedPing ?? "OFF")}
					/>
					// </div>
				);
			})}
		</div>
	) : (
		<Typography variant="h1" color="primary" className="w-full text-center">
			Can't read
			<span className="text-2xl text-red-500"> {selectedDevice} </span> data for
			this site, please make sure the device is exists in the site or contact
			our administrator
		</Typography>
	);
};

export default PingStatusDetail;
