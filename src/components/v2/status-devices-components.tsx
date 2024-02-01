import { FunctionComponent } from "../../common/types";
// import { MyMap } from "../../ui/default-map";

const StatusDevices = ({}): FunctionComponent => {
	return (
		<>
			<div className="w-full h-full row-span-4 col-span-3 bg-sky-200 flex-none">
				<div className="grid grid-rows-3 grid-cols-2">
					<div className="bg-red-200" />
					<div className="bg-yellow-200" />
					<div className="bg-blue-200" />
					<div className="bg-purple-200" />
					<div className="bg-lime-200" />
					<div className="bg-sky-200" />
				</div>
			</div>
		</>
	);
};

export default StatusDevices;
