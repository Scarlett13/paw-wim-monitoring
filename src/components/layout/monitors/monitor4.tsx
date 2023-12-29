import type { FunctionComponent } from "@/src/common/types";
import { SimpleCard } from "../../cards";
import Typography from "../../ui/default-typography";

const MonitorBottomRight = (): FunctionComponent => {
	const dummysiteid = [
		{ siteid: "1", sitename: "Batu Ceper" },
		{ siteid: "2", sitename: "Cilamaya" },
		{ siteid: "3", sitename: "Ciasem" },
		{ siteid: "4", sitename: "kalijaga" },
		{ siteid: "5", sitename: "Kanci" },
		{ siteid: "6", sitename: "Ciputra Haji" },
		{ siteid: "7", sitename: "Cisomang" },
		{ siteid: "8", sitename: "Cilutung" },
		{ siteid: "9", sitename: "Wonokerto" },
		{ siteid: "10", sitename: "Pang" },
		{ siteid: "11", sitename: "Tajum Margasana" },
		{ siteid: "12", sitename: "Munjungan" },
		{ siteid: "13", sitename: "Wirolegi" },
		{ siteid: "14", sitename: "Jetak" },
		{ siteid: "15", sitename: "Pemali" },
	];
	return (
		<>
			{/* monitor 4 */}
			<div className="grid grid-cols-5 grid-rows-7 bottom-right h-screen w-screen 4xl:h-full 4xl:w-full">
				<div className="col-span-5 mt-4 text-center mx-4">
					<SimpleCard className="shadow-lg border-solid border-4 border-slate-400">
						<Typography variant="j2" className="font-bold">
							CCTV CAPTURE
						</Typography>
					</SimpleCard>
				</div>
				<div className="row-span-1 col-span-5 mt-6">
					<div className="grid grid-rows-3 grid-cols-5 gap-4 mx-10">
						{dummysiteid.map((site) => {
							return (
								<div
									key={site.siteid}
									className="flex flex-col w-full items-center justify-center"
								>
									<img
										src={`capture-car-${site.siteid}.jpg`}
										alt="caputer-car-1.jpeg"
										className="h-auto w-auto mt-5 border-2 border-gray-400 shadow-md"
									/>
									<p>{site.sitename}</p>
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
