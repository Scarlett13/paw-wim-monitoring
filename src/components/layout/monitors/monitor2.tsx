import type { FunctionComponent } from "@/src/common/types";

const MonitorTopRight = (): FunctionComponent => {
	return (
		<>
			{/* monitor 2 - todo: sesuaikan rows nya, ini dibikin 7 biar bagus waktu di color-coded*/}
			<div className="grid grid-cols-4 grid-rows-7 bg-green-500 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title */}
				<div className="col-span-4 bg-red-200"> sitename </div>
				{/* disk gauge */}
				<div className="row-span-3 bg-zinc-300">disk</div>
				{/* cpu gauge */}
				<div className="row-span-3 bg-amber-300">cpu</div>
				{/* memory gauge */}
				<div className="row-span-3 bg-zinc-300">memory</div>
				{/* orbit gauge */}
				<div className="row-span-3 bg-amber-300">orbit quota</div>
				{/* text sensor */}
				{/* <div className="bg-red-300 col-span-4 w-full h-full"> Sensor</div> */}
				{/* loop status */}
				<div className="row-span-3 bg-amber-300">loop</div>
				{/* wim lane 1 status */}
				<div className="row-span-3 bg-zinc-300">wim lane 1</div>
				{/* wim lane 2 status */}
				<div className="row-span-3 bg-amber-300">wim lane 2</div>
				{/* orbit ping */}
				<div className="row-span-3 bg-zinc-300">orbit ping</div>
			</div>
		</>
	);
};

export default MonitorTopRight;
