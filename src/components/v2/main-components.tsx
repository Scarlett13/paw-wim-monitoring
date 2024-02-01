import { FunctionComponent } from "../../common/types";
import { MyMap } from "../ui/default-map";

const MainComponents = ({}): FunctionComponent => {
	return (
		<>
			<div className="h-full flex flex-shrink-0 items-center justify-center overflow-hidden w-4/6 bg-purple-300">
				<MyMap
					isUppkb={true}
					isLoading={false}
					markers={[]}
					selectedSiteMapHook={undefined}
				/>
			</div>
		</>
	);
};

export default MainComponents;
