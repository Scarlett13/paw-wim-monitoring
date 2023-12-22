import clsxm from "@src/libs/clsxm";
import * as React from "react";

const CARD_SIZE = ["sm", "base"] as const;
type CardSize = (typeof CARD_SIZE)[number];

type StatusCardProps = {
	size?: CardSize;
} & React.ComponentPropsWithoutRef<"div">;

export default function StatusCard({
	className,
	size = "base",
	...rest
}: StatusCardProps) {
	return (
		<div
			className={clsxm(
				"bg-background shadow-sm",
				[
					size === "sm" && ["p-4", "rounded-lg"],
					size === "base" && ["p-5", "rounded-xl"],
				],
				className
			)}
			{...rest}
		/>
	);
}
