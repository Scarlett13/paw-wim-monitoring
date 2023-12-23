import clsxm from "../../libs/clsxm";
import * as React from "react";

const CARD_SIZE = ["sm", "base"] as const;
type CardSize = (typeof CARD_SIZE)[number];

type TableCardProps = {
	size?: CardSize;
} & React.ComponentPropsWithoutRef<"div">;

export default function TableCard({
	className,
	size = "base",
	...rest
}: TableCardProps) {
	return (
		<div
			className={clsxm(
				"bg-background shadow-sm",
				[size === "sm" && ["p-4"], size === "base" && ["p-5"]],
				className
			)}
			{...rest}
		/>
	);
}
