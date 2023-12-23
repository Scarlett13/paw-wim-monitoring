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
				<div className="col-span-4 text-center mr-3 ml-3">
					<SimpleCard className="shadow-lg">
						<Typography variant="h1" className="mt-6">
							Daftar status WIM
						</Typography>
					</SimpleCard>
				</div>
				{/* table */}
				<div className="col-span-4 row-span-6">
					<Table />
				</div>
			</div>
		</>
	);
};

export default MonitorBottomLeft;
