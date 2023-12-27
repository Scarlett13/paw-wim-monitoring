import GaugeMeter from "../charts/gauge/gauge-meter";
import Typography from "../ui/default-typography";

interface IGaugeLayout {
	title: string;
	value: number | string;
	color: string;
	onoff: boolean;
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
}: IGaugeLayout) {
	return (
		<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center">
			<Typography variant="j1">{title}</Typography>
			<GaugeMeter
				valuegg={value}
				color={color}
				onoff={onoff}
				textPrefix={textPrefix}
				textSuffix={textSuffix}
			/>
		</div>
	);
}
