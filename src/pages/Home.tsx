import type { FunctionComponent } from "../common/types";
import {
	MonitorBottomLeft,
	MonitorBottomRight,
	MonitorTopLeft,
	MonitorTopRight,
} from "../components/layout/monitors";

const Home = (): FunctionComponent => {
	return (
		<main className="w-screen h-screen">
			<div className="flex flex-col min-w-fit min-h-fit max-w-screen 4xl:grid 4xl:grid-cols-2 4xl:grid-rows-2 4xl:w-full 4xl:h-full">
				<MonitorTopLeft />
				<MonitorTopRight />
				<MonitorBottomLeft />
				<MonitorBottomRight />
			</div>
		</main>
	);
};

export default Home;
