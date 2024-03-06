import { useSearch } from "@tanstack/router";
import { FunctionComponent } from "../../common/types";
// import Typography from "../ui/default-typography";
import PcStatusDetail from "./pc-status-detail";
import { IndexRoute } from "../../routes/IndexRoute";
import { useSwrV2 } from "../../hooks/use-swr";
import { findSiteById } from "../../utils/v2/array-utils-v2";
import Skeleton from "../ui/default-skeleton";
import PingStatusDetail from "./ping-status-detail";
import useSiteList from "../../hooks/use-site";
// import WimStatusDetail from "./wim-status-detail";
// import { MyMap } from "../../ui/default-map";

const StatusDevices = ({}): FunctionComponent => {
	const { selectedSiteId, selectedDevice } = useSearch({
		from: IndexRoute.fullPath,
	});

	const { isValidating } = useSwrV2();
	const { sortedSite } = useSiteList();

	const selectedsite = findSiteById(sortedSite, selectedSiteId);
	console.log(selectedDevice);

	const renderdDevice = () => {
		switch (selectedDevice) {
			case "PC":
			case "PC VMS":
				return (
					<PcStatusDetail
						isLoading={false}
						pcdata={selectedsite[selectedDevice] ?? {}}
						isVpnAvailable={selectedsite?.siteConfig?.is_vpn_available ?? false}
					/>
				);
			case "Router":
			case "Camera CCTV":
			case "Camera LPR":
			case "Lidar":
			case "NVR":
			case "Radio":
			case "Switch":
			case "Modem":
			case "VMS":
			case "Relay":
				// console.log(selectedsite[selectedDevice]);
				return (
					<PingStatusDetail
						isLoading={isValidating}
						pingdata={selectedsite[selectedDevice]}
					/>
				);
			case "WIM Logic":
				// console.log(selectedsite[selectedDevice]);
				return (
					<PingStatusDetail
						isLoading={isValidating}
						pingdata={selectedsite[selectedDevice]}
					/>
				);
			default:
				return <>SELECTED DEVICE NOT RECOGNIZED</>;
		}
	};
	return isValidating ? (
		<>
			<Skeleton className="w-full h-24 p-8" />
		</>
	) : (
		<>{selectedsite ? renderdDevice() : "No Site found"}</>
	);
};

export default StatusDevices;
