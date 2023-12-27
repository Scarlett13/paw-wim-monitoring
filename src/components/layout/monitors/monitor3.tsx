import type { FunctionComponent } from "@/src/common/types";
import Table from "../../table/table-monitor3";
import Typography from "../../ui/default-typography";
import { SimpleCard } from "../../cards";

const MonitorBottomLeft = (): FunctionComponent => {
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
				{/* table */}
				<div className="col-span-4 row-span-6 mt-2">
					<Table />
				</div>
			</div>
		</>
	);
};

export default MonitorBottomLeft;
