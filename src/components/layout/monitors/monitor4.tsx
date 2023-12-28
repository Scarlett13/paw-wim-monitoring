import type { FunctionComponent } from "@/src/common/types";
import { SimpleCard } from "../../cards";
import Typography from "../../ui/default-typography";

const MonitorBottomRight = (): FunctionComponent => {
	return (
		<>
			{/* monitor 4 */}
			<div className="grid grid-cols-4 grid-rows-7 bottom-right h-screen w-screen 4xl:h-full 4xl:w-full">
				<div className="row-span-2 text-center">
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						{/* <Typography variant="h3" className="">
							site 1
						</Typography> */}
						<div className="h-full w-full">
							<img
								src="../public/apple-touch-icon.png"
								alt="apple-touch-icon"
								className="h-24 ml-20 mb-2"
							/>
						</div>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
				</div>
				<div className="row-span-2 text-center">
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
				</div>
				<div className="row-span-2 text-center">
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
				</div>
				<div className="col-span-1 row-span-2 text-center">
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
					<SimpleCard className="w-72 h-32 border-2 border-gray-400 shadow-md mt-3 ml-3">
						<img
							src="../public/apple-touch-icon.png"
							alt="apple-touch-icon"
							className="h-24 ml-20 mb-2"
						/>
					</SimpleCard>
				</div>
			</div>
		</>
	);
};

export default MonitorBottomRight;
