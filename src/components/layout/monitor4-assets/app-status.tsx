import { IWimStatusResponse } from "@/src/types/response"
import { OnOffStatusLayout } from ".."
import { getTypographyColorFromStatus } from "../../utils/colorPickerUtils"
import { FunctionComponent } from "@/src/common/types"
import { MonitorEmptyState } from "../monitors/monitor-empty-state"

interface AppProps {
    selectedSite : IWimStatusResponse | null
    isLoading : boolean
}

const AppStatus = ({
    selectedSite,
    isLoading
}:AppProps) : FunctionComponent => {
    return selectedSite ? (
            <>
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
            </>
    ) : (<MonitorEmptyState/>)
};

export default AppStatus

