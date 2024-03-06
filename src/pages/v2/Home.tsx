import { useSearch } from "@tanstack/router";
import { FunctionComponent } from "../../common/types";
import Typography from "../../components/ui/default-typography";
import MainComponents from "../../components/v2/main-components";
import StatusCategories from "../../components/v2/status-categories-components";
import StatusCount from "../../components/v2/status-counts-components";
import StatusDevices from "../../components/v2/status-devices-components";
import TitleComponents from "../../components/v2/title-component";
import ViewConfig from "../../components/v2/view-configs-components";
import { useSwrV2 } from "../../hooks/use-swr";
import Skeleton from "../../components/ui/default-skeleton";
import { IndexRoute } from "../../routes/IndexRoute";
import { findSiteById } from "../../utils/v2/array-utils-v2";
import useSiteList from "../../hooks/use-site";
// import { useSwrV2 } from "../../hooks/use-swr";

const Home = (): FunctionComponent => {
	const { selectedSiteId } = useSearch({
		from: IndexRoute.fullPath,
	});

	const { isValidating } = useSwrV2();
	const { sortedSite } = useSiteList();

	const selectedsite = findSiteById(sortedSite, selectedSiteId);

	return (
		<main className="flex flex-wrap h-screen flex-row w-screen bg-black">
			<TitleComponents />

			<div className="w-full h-[40vh] flex items-center justify-center">
				<StatusCount />
				<MainComponents />
				<ViewConfig />
			</div>

			<div className="w-full h-[50vh] flex flex-shrink-0 items-center justify-center flex-col bg-lime-200 overflow-auto">
				<div className="w-full h-16 bg-white items-center justify-center text-center pt-2">
					{isValidating ? (
						<Skeleton className="w-32 h-8" />
					) : (
						//@ts-ignore
						<Typography variant="j1">
							{!sortedSite || !selectedsite
								? "No Site Found"
								: `Site ${selectedsite?.siteName}` ?? "Unknown Site"}
						</Typography>
					)}
				</div>
				<div className="w-full h-full bg-white flex flex-row">
					<div className="w-1/2 max-h-[46vh] overflow-y-auto p-8">
						<StatusCategories />
					</div>
					<div className="w-1/2 max-h-[46vh] overflow-y-auto p-8">
						<StatusDevices />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
