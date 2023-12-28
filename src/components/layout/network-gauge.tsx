import NetworkGaugeMeter from "../charts/gauge/network-gauge";
import Skeleton from "../ui/default-skeleton";
import Typography from "../ui/default-typography";

interface INetworkGaugeLayout {
	title: string;
	value: number | string;
	onoff: boolean;
	isLoading: boolean;
	textSuffix?: string;
	textPrefix?: string;
	min?: number;
	max?: number;
	slidercolor: string;
	quotaday: string;
	textcolor: "danger" | "custom_warning" | "custom_success";
}

export default function NetworkGaugeLayout({
	title,
	value = "OFF",
	slidercolor = "#2BD03B",
	onoff = true,
	textSuffix = "",
	textPrefix = "",
	isLoading,
	min = 0,
	max = 100,
	quotaday = "OFF",
	textcolor = "danger",
}: INetworkGaugeLayout) {
	return (
		<div className="row-span-3 bg-white h-full w-full flex flex-col items-center justify-center z-10">
			<Typography variant="j1">{title}</Typography>
			{isLoading ? (
				<Skeleton className="h-full w-full" />
			) : (
				<Typography variant="j1" className="text-center text-7xl">
					<NetworkGaugeMeter
						slidercolor={slidercolor}
						quotaday={quotaday}
						textcolor={textcolor}
						onoff={onoff}
						textPrefix={textPrefix}
						textSuffix={textSuffix}
						min={min}
						max={max}
						value={value}
					/>
				</Typography>
			)}
		</div>
	);
}
