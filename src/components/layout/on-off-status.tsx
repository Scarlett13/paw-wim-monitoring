import clsxm from "../../libs/clsxm";
import Skeleton from "../ui/default-skeleton";
import Typography from "../ui/default-typography";

interface IOnOffStatusLayout {
	title: string;
	value: number | string;
	color: "danger" | "custom_success" | "custom_warning" | "primary";
	isLoading: boolean;
	className?: string;
}

export default function OnOffStatusLayout({
	title,
	value = "OFF",
	color,
	isLoading,
	className,
}: IOnOffStatusLayout) {
	console.log(color);
	return (
		<div
			className={clsxm(
				"row-span-2 col-span-1 bg-white h-full w-full flex flex-col items-center justify-center",
				className
			)}
		>
			<Typography variant="j1" className="z-40">
				{title}
			</Typography>
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
