import { FunctionComponent } from "../../common/types";
import Typography from "../ui/default-typography";
import ProgressBar from "@ramonak/react-progress-bar";

const StatusCategories = ({}): FunctionComponent => {
	return (
		<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-1/2 flex-col bg-white">
			<div className="h-1/3 flex flex-shrink-0 items-center justify-center overflow-hidden w-full flex-row">
				<div className="w-1/2 h-full items-center justify-center flex flex-col">
					<Typography variant={"h1"}>PC</Typography>
					<ProgressBar completed="60" className="w-full mt-8 px-8" />
				</div>
				<div className="w-1/2 h-full items-center justify-center flex flex-col">
					<Typography variant={"h1"}>Camera</Typography>
					<ProgressBar completed="60" className="w-full mt-8 px-8" />
				</div>
			</div>
			<div className="h-1/3 flex flex-shrink-0 items-center justify-center overflow-hidden w-full flex-row">
				<div className="w-1/2 h-full items-center justify-center flex flex-col">
					<Typography variant={"h1"}>Lidar</Typography>
					<ProgressBar completed="60" className="w-full mt-8 px-8" />
				</div>
				<div className="w-1/2 h-full items-center justify-center flex flex-col">
					<Typography variant={"h1"}>WIM</Typography>
					<ProgressBar completed="60" className="w-full mt-8 px-8" />
				</div>
			</div>
			<div className="h-1/3 flex flex-shrink-0 items-center justify-center overflow-hidden w-full flex-row">
				<div className="w-1/2 h-full items-center justify-center flex flex-col">
					<Typography variant={"h1"}>PC</Typography>
					<ProgressBar completed="60" className="w-full mt-8 px-8" />
				</div>
				<div className="w-1/2 h-full items-center justify-center flex flex-col">
					<Typography variant={"h1"}>PC</Typography>
					<ProgressBar completed="60" className="w-full mt-8 px-8" />
				</div>
			</div>
		</div>
	);
};

export default StatusCategories;
