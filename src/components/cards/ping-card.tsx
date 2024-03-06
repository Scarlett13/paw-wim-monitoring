import * as React from "react";
import { IconType } from "react-icons";

import Skeleton from "../ui/default-skeleton";
import Typography from "../ui/default-typography";
import clsxm from "../../libs/clsxm";
// import ProgressBar from "../v2/custom-progress-bar";

const pingCardVariant = [
	"primary",
	"secondary",
	"danger",
	"custom_warning",
	"custom_success",
] as const;
type PingCardVariant = (typeof pingCardVariant)[number];

type PingCardProps = {
	icon?: IconType;
	iconClassName?: string;
	isLoading?: boolean;
	label: string;
	value: number | string;
	variant?: PingCardVariant;
} & React.ComponentPropsWithoutRef<"div">;

export default function PingCard({
	className,
	icon: Icon,
	iconClassName,
	isLoading = false,
	label,
	value,
	variant = "primary",
	...rest
}: PingCardProps) {
	return (
		<div
			className={clsxm(
				"bg-background rounded-xl p-3",
				"border-typo-divider border",
				"flex items-center gap-3",
				className
			)}
			{...rest}
		>
			{Icon && (
				<div
					className={clsxm("rounded-lg p-2", [
						variant === "primary" && ["bg-primary-50"],
						variant === "secondary" && ["bg-secondary-50"],
						variant === "custom_warning" && ["bg-yellow-50"],
						variant === "danger" && ["bg-red-50"],
						variant === "custom_success" && ["bg-green-50"],
					])}
				>
					<Icon
						size="1.5em"
						className={clsxm(
							[
								variant === "primary" && ["text-primary-500"],
								variant === "secondary" && ["text-secondary-500"],
								variant === "custom_warning" && ["text-yellow-500"],
								variant === "danger" && ["text-red-500"],
								variant === "custom_success" && ["text-green-500"],
							],
							iconClassName
						)}
					/>
				</div>
			)}
			{isLoading ? (
				<div>
					<Skeleton className="h-4 w-24" />
					<Skeleton className="mt-1 h-4 w-10" />
				</div>
			) : (
				<div className="w-full flex gap-2 flex-col ms-4">
					<Typography variant="h1" color={"primary"}>
						{label}
					</Typography>
					<Typography variant="h1" color={variant}>
						{value}
					</Typography>
				</div>
			)}
		</div>
	);
}
