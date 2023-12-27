import type { FunctionComponent } from "@/src/common/types";
// import Table from "../../table/table-monitor3";
import Typography from "../../ui/default-typography";
import { SimpleCard, StatisticsCard } from "../../cards";

import { IconType } from "react-icons";
import { getIconCardSite, getStatusCardSite } from "../../../utils/statusUtils";
import { getShortcut } from "../../../utils/keyPressedUtils";

interface MonitorBottomLeftProps {
	listMergedSiteData: any[];
	isLoading: boolean;
}

const MonitorBottomLeft = ({
	listMergedSiteData,
	isLoading,
}: MonitorBottomLeftProps): FunctionComponent => {
	// console.log(listMergedSiteData);
	return (
		<>
			{/* monitor 3 */}
			<div className="grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title */}
				<div className="col-span-4 text-center mt-4 mr-3 ml-3">
					<SimpleCard className="shadow-lg border-solid border-4 border-slate-400">
						<Typography variant="j2" className="font-bold">
							Daftar Status WIM
						</Typography>
					</SimpleCard>
				</div>

				{listMergedSiteData &&
					listMergedSiteData.map((sitedata) => {
						const status = getStatusCardSite(sitedata);
						const icon: IconType = getIconCardSite(sitedata);
						const shortcut = getShortcut(sitedata.siteid);
						return (
							<div
								className="bg-white h-full w-full px-8"
								key={sitedata.siteid}
							>
								<StatisticsCard
									variant={status}
									isLoading={isLoading}
									icon={icon}
									className="shadow-md"
									label={`Shortcut: ${shortcut}`}
									value={sitedata.sitename}
								/>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default MonitorBottomLeft;
