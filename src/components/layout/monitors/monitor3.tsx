import type { FunctionComponent } from "@/src/common/types";
import Table from "../../table/table-monitor3";
import Typography from "../../ui/default-typography";
import { SimpleCard } from "../../cards";
import TableCard from "../../cards/table-card";

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
				<div className="row-span-1 text-center m-2">
					<TableCard className="w-full h-full border-2 border-black mt-8 ml-0">
						test
					</TableCard>
					<TableCard className="w-full h-full border-2 border-black mt-8 ml-0">
						test
					</TableCard>
				</div>
				<div className="row-span-1 text-center m-2">
					<TableCard className="w-full h-full border-2 border-black mt-8 ml-0">
						test
					</TableCard>
					<TableCard className="w-full h-full border-2 border-black mt-8 ml-0">
						test
					</TableCard>
				</div>
				<div className="row-span-1 text-center m-2">
					<TableCard className="w-full h-full border-2 border-black mt-8 ml-0">
						test
					</TableCard>
					<TableCard className="w-full h-full border-2 border-black mt-8 ml-0">
						test
					</TableCard>
				</div>
				<div className="row-span-1 text-center m-2">
					<TableCard className="w-full h-full border-2 border-black mt-8 ml-0">
						test
					</TableCard>
					<TableCard className="w-full h-full border-2 border-black mt-8 ml-0">
						test
					</TableCard>
					<TableCard className="w-full h-full border-2 border-black mt-8 ml-0">
						test
					</TableCard>
					<TableCard className="w-full h-full border-2 border-black mt-8 ml-0">
						test
					</TableCard>
					<TableCard className="w-full h-full border-2 border-black mt-5 ml-0">
						test
					</TableCard>
				</div>
			</div>
		</>
	);
};

export default MonitorBottomLeft;
