import { FunctionComponent } from "../../common/types";
import StatusCardV2 from "./status-card-v2";

const StatusDevices = ({}): FunctionComponent => {
	return (
		<>
			<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-1/6 bg-white">
				<div className="w-full flex gap-4 flex-col">
					<StatusCardV2
						isLoading={false}
						title={"Normal"}
						value={"2"}
						cardStatus={"ok"}
					/>
					<StatusCardV2
						isLoading={false}
						title={"Warning"}
						value={"2"}
						cardStatus={"warning"}
					/>
					<StatusCardV2
						isLoading={false}
						title={"Off"}
						value={"2"}
						cardStatus={"off"}
					/>
				</div>
			</div>
		</>
	);
};

export default StatusDevices;
