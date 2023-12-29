import type { FunctionComponent } from "@/src/common/types";
import { SimpleCard } from "../../cards";
import Typography from "../../ui/default-typography";

const MonitorBottomRight = (): FunctionComponent => {
	const dummysiteid = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
	];
	return (
		<>
			{/* monitor 4 */}
			<div className="grid grid-cols-5 grid-rows-7 bottom-right h-screen w-screen 4xl:h-full 4xl:w-full">
				<div className="col-span-5 mt-4 text-center">
					<SimpleCard className="shadow-lg border-solid border-4 border-slate-400">
						<Typography variant="j2" className="font-bold">
							CCTV CAPTURE
						</Typography>
					</SimpleCard>
				</div>
				<div className="row-span-1 col-span-5 mt-20">
					<div className="grid grid-rows-3 grid-cols-5 gap-4 mx-10">
						{dummysiteid.map((id) => {
							return (
								<div
									key={id}
									className="flex w-full items-center justify-center"
								>
									<img
										src={`capture-car-${id}.jpg`}
										alt="caputer-car-1.jpeg"
										className="h-auto w-auto mt-5 border-2 border-gray-400 shadow-md"
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default MonitorBottomRight;
