import { IWimStatusResponse } from "@/src/types/response";
import { OnOffStatusLayout } from "..";
import { getTypographyColorFromStatus } from "../../utils/colorPickerUtils";
import { FunctionComponent } from "@/src/common/types";
import { MonitorEmptyState } from "../monitors/monitor-empty-state";

interface WimLogicProps {
	selectedSite: IWimStatusResponse | null;
	isLoading: boolean;
}

const WimLogic =  ({
    selectedSite,
    isLoading
}: WimLogicProps):FunctionComponent => {
    return selectedSite? (
    <>
            <OnOffStatusLayout
                isLoading={isLoading}
                title="Wim Logic Ping"
                value={selectedSite.ping.wim_logic.status}
                color={getTypographyColorFromStatus(
                selectedSite.ping.wim_logic.status
                )}
            />
    </>   
    ) : (<MonitorEmptyState/>)
} 


export default WimLogic