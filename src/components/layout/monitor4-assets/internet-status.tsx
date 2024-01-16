import { IWimStatusResponse } from "@/src/types/response";
import { GaugeLayout } from "..";
import { formatNumberWithTwoDecimals } from "../../utils/numberUtils";
import { getColorFromStatus } from "../../utils/colorPickerUtils";
import { FunctionComponent } from "@/src/common/types";
import { getNerworkBytes } from "@/src/utils/bytesUtils";
import { MonitorEmptyState } from "../monitors/monitor-empty-state";

interface NetworkStatusProps {
	selectedSite: IWimStatusResponse | null;
	isLoading: boolean;
}

const NetworkStatus = ({
	selectedSite,
	isLoading,
}: NetworkStatusProps): FunctionComponent => {
    const network = getNerworkBytes(selectedSite?.network.download || "-");
    return selectedSite ? (
        <>
        {/* Network */}
				<GaugeLayout
					isLoading={isLoading}
					title="Network"
					value={formatNumberWithTwoDecimals(network.value)}
					color={getColorFromStatus(selectedSite.network.status)}
					onoff={selectedSite.network.status === "OFF"}
					textSuffix={network.unit || ""}
					textPrefix=""
				/>
        </>
    ) : (<MonitorEmptyState/>)
}

export default NetworkStatus