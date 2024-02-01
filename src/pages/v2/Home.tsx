import { FunctionComponent } from "../../common/types";
import MainComponents from "../../components/v2/main-components";
import StatusCategories from "../../components/v2/status-categories-components";
import StatusCount from "../../components/v2/status-counts-components";
import StatusDevices from "../../components/v2/status-devices-components";
import TitleComponents from "../../components/v2/title-component";
import ViewConfig from "../../components/v2/view-configs-components";

const Home = (): FunctionComponent => {
	return (
		<main className="flex flex-wrap h-screen flex-row w-screen bg-black">
			<TitleComponents />

			<div className="w-full h-[40vh] flex flex-shrink-0 items-center justify-center overflow-hidden">
				<StatusCount />
				<MainComponents />
				<ViewConfig />
			</div>

			<div className="w-full h-[50vh] flex flex-shrink-0 items-center justify-center overflow-hidden">
				<StatusCategories />
				<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-1/2 bg-indigo-300">
					Item 2
				</div>
			</div>
		</main>
	);
};

export default Home;
