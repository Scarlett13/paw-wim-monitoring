import type { FunctionComponent } from "@/src/common/types";
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
				<div className="row-span-1 text-center m-1">
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-16 ml-2 shadow-md">
						Site 1
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-2 shadow-md">
						Site 2
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-2 shadow-md">
						Site 3
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-36 shadow-md">
						Site 4
					</TableCard>
				</div>
				<div className="row-span-1 text-center m-1">
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-16 ml-1 shadow-md">
						Site 5
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-1 shadow-md">
						site 6
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-1 shadow-md">
						site 7
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-36 shadow-md">
						site 8
					</TableCard>
				</div>
				<div className="row-span-1 text-center m-1">
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-16 ml-1 shadow-md">
						Site 9
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-1 shadow-md">
						site 10
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-1 shadow-md">
						Site 11
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-36 shadow-md">
						Site 12
					</TableCard>
				</div>
				<div className="row-span-1 text-center m-1">
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-16 ml-2 shadow-md">
						Site 13
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-2 shadow-md">
						Site 14
					</TableCard>
					<TableCard className="w-72 h-full border-2 border-gray-400 mt-5 ml-2 shadow-md">
						Site 15
					</TableCard>
				</div>
			</div>
		</>
	);
};

export default MonitorBottomLeft;
