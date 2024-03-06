import { useEffect, useState } from "react";
import { FunctionComponent } from "../../common/types";
import { useSwrV2 } from "../../hooks/use-swr";
import StatusCardV2 from "./status-card-v2";
import { useNavigate, useSearch } from "@tanstack/router";
import { IndexRoute } from "../../routes/IndexRoute";

const StatusDevices = ({}): FunctionComponent => {
	const { projecttype, selectedSiteId, selectedDevice } = useSearch({
		from: IndexRoute.fullPath,
	});

	const navigate = useNavigate({ from: IndexRoute.fullPath });

	const [countOff, setCountOff] = useState<number>(0);
	const [countNormal, setCountNormal] = useState<number>(0);
	const [countWarning, setCountWarning] = useState<number>(0);
	const [countAll, setCountAll] = useState<number>(0);

	const { data, isValidating } = useSwrV2();

	useEffect(() => {
		if (data) {
			setCountNormal(0);
			setCountOff(0);
			setCountWarning(0);
			setCountAll(0);
			for (const site of data as any) {
				setCountAll((prev) => prev + 1);
				if (site?.siteStatus === "off") {
					setCountOff((prev) => prev + 1);
				}

				if (site?.siteStatus === "normal") {
					setCountNormal((prev) => prev + 1);
				}

				if (site?.siteStatus === "warning") {
					setCountWarning((prev) => prev + 1);
				}
			}
		}
	}, [data]);

	function handleCardClicked(value: "all" | "warning" | "normal" | "off") {
		navigate({
			search: () => ({
				projecttype: projecttype,
				selectedSiteId: selectedSiteId,
				selectedDevice: selectedDevice,
				siteStatus: value,
			}),
		});
	}

	return (
		<>
			<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-1/6 bg-white">
				<div className="w-full flex gap-4 flex-col">
					<div
						onClick={() => {
							handleCardClicked("all");
						}}
					>
						<StatusCardV2
							isLoading={isValidating}
							title={"All"}
							value={String(countAll)}
							cardStatus={"plain"}
						/>
					</div>

					<div
						onClick={() => {
							handleCardClicked("normal");
						}}
					>
						<StatusCardV2
							isLoading={isValidating}
							title={"Normal"}
							value={String(countNormal)}
							cardStatus={"ok"}
						/>
					</div>

					<div
						onClick={() => {
							handleCardClicked("warning");
						}}
					>
						<StatusCardV2
							isLoading={isValidating}
							title={"Warning"}
							value={String(countWarning)}
							cardStatus={"warning"}
						/>
					</div>

					<div
						onClick={() => {
							handleCardClicked("off");
						}}
					>
						<StatusCardV2
							isLoading={isValidating}
							title={"Off"}
							value={String(countOff)}
							cardStatus={"off"}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default StatusDevices;
