import type { FunctionComponent } from "@/src/common/types";

const MonitorBottomLeft = (): FunctionComponent => {
	return (
		<>
			{/* monitor 3 */}
			<div className="bg-yellow-500 grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title */}
				<div className="col-span-4 bg-lime-300">
					title table list device per status
				</div>
				{/* table */}
				<div className="col-span-4 row-span-6 bg-emerald-300">table</div>
			</div>
		</>
	);
};

export default MonitorBottomLeft;
