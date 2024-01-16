import type { FunctionComponent } from "@/src/common/types";
import Typography from "../../ui/default-typography";
import { SimpleCard } from "../../cards";
import CctvTable from "../../monitor3-assets/cctv-capture";

const MonitorBottomLeft = (): FunctionComponent => {
	return (
		<>
			{/* monitor 3 */}
			<div className="grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title */}
				<div className="col-span-4 text-center mt-4 mr-3 ml-3">
					<SimpleCard className="shadow-lg border-solid border-4 border-slate-400">
						<Typography variant="j2" className="font-bold">
							CCTV Capture Here
						</Typography>
					</SimpleCard>
				</div>
				{/* table */}
				<div className="col-span-4 row-span-6 mt-2 mb-2">
					<CctvTable/>
				</div>
			</div>
		</>
	);
};

export default MonitorBottomLeft;
