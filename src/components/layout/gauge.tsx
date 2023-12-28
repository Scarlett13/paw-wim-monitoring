import GaugeMeter from "../charts/gauge/gauge-meter";
import Skeleton from "../ui/default-skeleton";
import Typography from "../ui/default-typography";

interface IGaugeLayout {
	title: string;
	value: number | string;
	color: string;
	onoff: boolean;
	isLoading: boolean;
	textSuffix?: string;
	textPrefix?: string;
}

export default function GaugeLayout({
	title,
	value = "OFF",
	color = "#2BD03B",
	onoff = true,
	textSuffix = "",
	textPrefix = "",
	isLoading,
}: IGaugeLayout) {
	return (
		<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center mt-3">
			<Typography variant="j1">{title}</Typography>
			{isLoading ? (
				<Skeleton className="h-full w-full" />
			) : (
				<Typography variant="j1" className="text-center text-7xl">
					<GaugeMeter
						valuegg={value}
						color={color}
						onoff={onoff}
						textPrefix={textPrefix}
						textSuffix={textSuffix}
					/>
				</Typography>
			)}
		</div>
	);
}
