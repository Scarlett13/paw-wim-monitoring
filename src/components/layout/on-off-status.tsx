import Skeleton from "../ui/default-skeleton";
import Typography from "../ui/default-typography";

interface IOnOffStatusLayout {
	title: string;
	value: number | string;
	color: "danger" | "custom_success" | "custom_warning";
	isLoading: boolean;
}

export default function OnOffStatusLayout({
	title,
	value = "OFF",
	color,
	isLoading,
}: IOnOffStatusLayout) {
	console.log(color);
	return (
		<div className="row-span-3 bg-white shadow-md h-full w-full flex flex-col items-center justify-center">
			<Typography variant="j1">{title}</Typography>
			<Typography variant="j2" color={color}>
				{isLoading ? (
					<Skeleton className="h-full w-full" />
				) : (
					<Typography variant="j1" className="text-center text-7xl">
						{value}
					</Typography>
				)}
			</Typography>
		</div>
	);
}
