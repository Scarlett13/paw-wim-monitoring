import type { FunctionComponent } from "@/src/common/types";
import { StatusCard } from "../../cards";
import Typography from "../../ui/default-typography";

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
					<StatusCard
						cardstatus="ok"
						className="bg-white h-full w-full flex flex-col gap-5"
					>
						<Typography variant="j1" className="text-center">
							OK
						</Typography>
						<Typography variant="j1" className="text-center text-7xl">
							15
						</Typography>
					</StatusCard>
				</div>
				{/* warning status */}
				<div className="row-span-2 bg-amber-500">
					<StatusCard cardstatus="warning" className="bg-white h-full w-full">
						<Typography variant="j1" className="text-center">
							WARNING
						</Typography>
					</StatusCard>
				</div>
				{/* on off status */}
				<div className="row-span-2 bg-yellow-700">
					<StatusCard cardstatus="off" className="bg-white h-full w-full">
						<Typography variant="j1" className="text-center">
							OFF
						</Typography>
					</StatusCard>
				</div>
				{/* maintenance status */}
				<div className="row-span-2 bg-lime-700">
					<StatusCard
						cardstatus="maintenance"
						className="bg-white h-full w-full"
					>
						<Typography variant="j1" className="text-center">
							MT
						</Typography>
					</StatusCard>
				</div>
			</div>
		</>
	);
};

export default MonitorTopLeft;
