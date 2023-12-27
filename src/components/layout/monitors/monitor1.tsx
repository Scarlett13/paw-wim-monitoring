import type { FunctionComponent } from "@/src/common/types";
import { StatusCard } from "../../cards";
import Typography from "../../ui/default-typography";

const MonitorTopLeft = (): FunctionComponent => {
	return (
		<>
			{/* Monitor 1 */}
			<div className="grid grid-cols-4 grid-rows-7 h-screen w-screen 4xl:h-full 4xl:w-full">
				{/* title and logo */}
				<div className="w-full col-span-1 border-r-2 border-gray-300">
					<img
						src="../public/Logo-GBU-2.svg"
						alt="Logo-GBU-2"
						className="object-cover ml-10 w-60 h-20"
					/>
				</div>
				<div className="w-full text-center col-span-2">
					<Typography variant="j1" className="mt-4">
						WIM Monitoring
					</Typography>
				</div>
				<div className="w-full text-center col-span-1 border-l-2 border-gray-300">
					<img
						src="../public/Logo-VGT-1.svg"
						alt="Logo-VGT-1"
						className="object-cover ml-14 w-48 h-20"
					/>
				</div>
				{/* map */}
				<div className="col-span-4 row-span-4 bg-slate-900 text-amber-50 text-center h-full">
					map
				</div>
				{/* ok status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="ok"
						className="bg-white h-full w-full flex flex-col gap-3 border-4 border-gray-300"
					>
						<Typography variant="j1" className="text-center">
							OK
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							<Typography variant="j1" className="text-center text-7xl">
								15
							</Typography>
						</div>
					</StatusCard>
				</div>
				{/* warning status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="warning"
						className="bg-white h-full w-full flex flex-col gap-3 border-4 border-gray-300"
					>
						<Typography variant="j1" className="text-center">
							WARNING
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							<Typography variant="j1" className="text-center text-7xl">
								0
							</Typography>
						</div>
					</StatusCard>
				</div>
				{/* on off status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="off"
						className="bg-white h-full w-full flex flex-col gap-3 border-4 border-gray-300"
					>
						<Typography variant="j1" className="text-center">
							OFF
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							<Typography variant="j1" className="text-center text-7xl">
								0
							</Typography>
						</div>
					</StatusCard>
				</div>
				{/* maintenance status */}
				<div className="row-span-2 shadow-md m-2 rounded-lg">
					<StatusCard
						cardstatus="maintenance"
						className="bg-white h-full w-full flex flex-col gap-3 border-4 border-gray-300"
					>
						<Typography variant="j1" className="text-center">
							MT
						</Typography>
						<div className="border-t border-gray-500 flex-grow">
							<Typography variant="j1" className="text-center text-7xl">
								0
							</Typography>
						</div>
					</StatusCard>
				</div>
			</div>
		</>
	);
};

export default MonitorTopLeft;
