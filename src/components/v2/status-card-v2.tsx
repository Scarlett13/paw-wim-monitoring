import { FunctionComponent } from "../../common/types";
import { StatusCard } from "../cards";
import Skeleton from "../ui/default-skeleton";
import Typography from "../ui/default-typography";

interface IStatusCardV2 {
	isLoading: boolean;
	title: string;
	value: string;
	cardStatus: "ok" | "warning" | "off" | "plain";
}

const StatusCardV2 = ({
	isLoading,
	title,
	value,
	cardStatus,
}: IStatusCardV2): FunctionComponent => {
	return isLoading ? (
		<div>
			<Skeleton />
		</div>
	) : (
		<StatusCard cardstatus={cardStatus}>
			<Typography variant="j1" className="text-center mb-">
				{title}
			</Typography>
			<Typography variant="j1" className="text-center text-5xl">
				{value}
			</Typography>
		</StatusCard>
	);
};

export default StatusCardV2;
