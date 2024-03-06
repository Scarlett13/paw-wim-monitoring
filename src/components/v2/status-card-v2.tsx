import { FunctionComponent } from "../../common/types";
import { StatusCard } from "../cards";
import Skeleton from "../ui/default-skeleton";
import Typography from "../ui/default-typography";

interface IStatusCardV2 {
	isLoading: boolean;
	title: string;
	value: string;
	cardStatus: "ok" | "warning" | "off" | "plain";
	onclick?: any;
}

const StatusCardV2 = ({
	isLoading,
	title,
	value,
	cardStatus,
	onclick,
}: IStatusCardV2): FunctionComponent => {
	return isLoading ? (
		<div className="w-full h-full px-8">
			<Skeleton className="h-32 w-full" />
		</div>
	) : (
		<StatusCard
			cardstatus={cardStatus}
			className="shadow-md mb-4 mx-4 border border-grey hover:cursor-pointer"
			onClick={onclick}
		>
			<Typography variant="j1" className="text-center mb-4">
				{title}
			</Typography>
			<Typography variant="j1" className="text-center text-5xl">
				{value}
			</Typography>
		</StatusCard>
	);
};

export default StatusCardV2;
