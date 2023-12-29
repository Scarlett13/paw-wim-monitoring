import type { FunctionComponent } from "@/src/common/types";
import { SimpleCard } from "../../cards";
import Typography from "../../ui/default-typography";

const MonitorBottomRight = (): FunctionComponent => {
	return (
		<>
			{/* monitor 4 */}
			<div className="grid grid-cols-4 grid-rows-7 bottom-right h-screen w-screen 4xl:h-full 4xl:w-full">
				<div className="col-span-4 mt-4 text-center">
					<SimpleCard className="shadow-lg border-solid border-4 border-slate-400">
						<Typography variant="j2" className="font-bold">
							CCTV CAPTURE
						</Typography>
					</SimpleCard>
				</div>
				<div className="row-span-1">
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-1.jpeg"
							alt="caputer-car-1.jpeg"
							className="h-28 w-auto mt-5 border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-2.jpg"
							alt="capture-car-2.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-3.jpg"
							alt="capture-car-3.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-4.jpg"
							alt="capture-car-4.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
				</div>
				<div className="row-span-1">
					<div className="flex w-full items-center justify-center mt-3">
						<img
							src="capture-car-5.jpg"
							alt="capture-car-5.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-6.jpg"
							alt="capture-car-6.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-7.jpg"
							alt="capture-car-7.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-8.jpg"
							alt="capture-car-8.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
				</div>
				<div className="row-span-1">
					<div className="flex w-full items-center justify-center mt-3">
						<img
							src="capture-car-9.jpg"
							alt="capture-car-9.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-10.jpg"
							alt="capture-car-10.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-11.jpg"
							alt="capture-car-11.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-12.jpg"
							alt="capture-car-12.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
				</div>
				<div className="row-span-1">
					<div className="flex w-full items-center justify-center mt-3">
						<img
							src="capture-car-13.jpg"
							alt="capture-car-13.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-14.jpg"
							alt="capture-car-14.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
					<div className="flex w-full items-center justify-center">
						<img
							src="capture-car-15.jpg"
							alt="capture-car-15.jpg"
							className="h-28 w-auto mt-3  border-2 border-gray-400 shadow-md"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default MonitorBottomRight;
