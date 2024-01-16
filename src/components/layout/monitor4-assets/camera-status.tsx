import { IWimStatusResponse } from "@/src/types/response";
import { OnOffStatusLayout } from "..";
import { getTypographyColorFromStatus } from "../../utils/colorPickerUtils";
import { FunctionComponent } from "@/src/common/types";
import { MonitorEmptyState } from "../monitors/monitor-empty-state";

interface CameraStatusProps {
	selectedSite: IWimStatusResponse | null;
	isLoading: boolean;
}

const CameraStatus =  ({
    selectedSite,
    isLoading
}: CameraStatusProps):FunctionComponent => {
    return selectedSite? (
    <>
            <OnOffStatusLayout
                isLoading={isLoading}
                title="Camera Ping"
                value={selectedSite.ping.camera.status}
                color={getTypographyColorFromStatus(
                selectedSite.ping.camera.status
                )}
            />
    </>   
    ) : (<MonitorEmptyState/>)
};


export default CameraStatus