import React, { useEffect, useState } from "react";

interface ProgressBarMeterProps {
	interval: number;
	deviceName: string;
}

const ProgressBarMeter: React.FC<ProgressBarMeterProps> = ({
	interval,
	deviceName,
}) => {
	const [progress, setProgress] = useState(0);
	const [text, setText] = useState("0");
	const [textColor, setTextColor] = useState("text-red-500");
	const [status, setStatus] = useState("N/A");

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => {
				const newProgress = prevProgress >= 100 ? 0 : prevProgress + 10;
				setText(`${newProgress}`);

				let color = "text-red-500";
				let newStatus = "OFF";

				if (newProgress > 0 && progress < 0) {
					color = "text-red-500";
					newStatus = "OFF";
				} else if (newProgress >= 10 && newProgress <= 50) {
					color = "text-yellow-500";
					newStatus = "WARNING";
				} else if (newProgress >= 60) {
					color = "text-green-500";
					newStatus = "OK";
				}

				setTextColor(color);
				setStatus(newStatus);
				return newProgress;
			});
		}, interval);

		return () => {
			clearInterval(timer);
		};
	}, [interval]);

	let colorClass = "bg-red-500";

	if (progress > 0 && progress < 0) {
		colorClass = "bg-red-500";
	} else if (progress >= 10 && progress <= 50) {
		colorClass = "bg-yellow-500";
	} else if (progress >= 60) {
		colorClass = "bg-green-500";
	}

	return (
		<div className="relative w-full mb-5 justify-between">
			<div className={`flex justify-between w-full ${textColor}`}>
				<div className="text-lg font-bold mr-2 mb-2">
					{deviceName} - {status}
				</div>
				<div className="text-lg font-bold mr-2 mb-2">{`${text}%`}</div>
			</div>
			<div className="h-8 bg-gray-300 rounded-full mb-4">
				<div
					className={`h-full rounded-full ${colorClass}`}
					style={{ width: `${progress}%` }}
				/>
			</div>
		</div>
	);
};

export default ProgressBarMeter;
