import type { FunctionComponent } from "@/src/common/types";
import { StatusCard } from "../../cards";

const MonitorTopLeft = (): FunctionComponent => {
	return (
		<>
			{/* Monitor 1 */}
			<div className="bg-blue-500 grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title and logo */}
				<div className="bg-neutral-600 w-full text-center col-span-1">logo</div>
				<div className="bg-purple-600 w-full text-center col-span-2">title</div>
				<div className=" bg-pink-600 w-full text-center col-span-1">logo</div>
				{/* map */}
				<div className="col-span-4 row-span-4 bg-slate-900 text-amber-50 text-center h-full">
					map
				</div>
				{/* ok status */}
				<div className="row-span-2 bg-orange-500">
					<StatusCard />
				</div>
				{/* warning status */}
				<div className="row-span-2 bg-amber-500">Warning status</div>
				{/* on off status */}
				<div className="row-span-2 bg-yellow-700">OFF/ON status</div>
				{/* maintenance status */}
				<div className="row-span-2 bg-lime-700">MT status</div>
			</div>
		</>
	);
};

export default MonitorTopLeft;
