import React from "react";
import { getColorFromStatusV2 } from "../../utils/v2/number-utils-v2";

type ProgressBarProps = {
	totalBars: number;
	completedBars: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
	totalBars,
	completedBars,
}) => {
	const color = getColorFromStatusV2(completedBars);
	return completedBars < 1 ? (
		<div className="flex">
			{Array.from({ length: totalBars }).map((_, index) => (
				<div key={index} className={`h-4 w-6 ${"bg-red-500"} mx-0.5`} />
			))}
		</div>
	) : (
		<div className="flex">
			{Array.from({ length: totalBars }).map((_, index) => (
				<div
					key={index}
					className={`h-4 w-6 ${index < completedBars ? color : "bg-gray-300"} mx-0.5`}
				/>
			))}
		</div>
	);
};

export default ProgressBar;
