import type { FunctionComponent } from "@/src/common/types";

const MonitorBottomRight = (): FunctionComponent => {
	return (
		<>
			{/* monitor 4 */}
			<div className="bottom-right bg-red-500 h-screen w-screen 4xl:h-full 4xl:w-full">
				content for bottom right monitor
			</div>
		</>
	);
};

export default MonitorBottomRight;
