import { GaugeLayout } from ".."
import { IWimStatusResponse } from "@/src/types/response";
import { formatNumberWithTwoDecimals } from "../../utils/numberUtils";
import { getColorFromStatus } from "../../utils/colorPickerUtils";
import { FunctionComponent } from "@/src/common/types";
import { MonitorEmptyState } from "../monitors/monitor-empty-state";

interface PcStatusProps {
	selectedSite: IWimStatusResponse | null;
	isLoading: boolean;
}

const PcStatus =  ({
    selectedSite,
    isLoading
}: PcStatusProps):FunctionComponent => {
    return selectedSite ? (
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
    textSuffix="%"
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
    textSuffix="%"
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

</>) : (<MonitorEmptyState/>)}

            

export default PcStatus