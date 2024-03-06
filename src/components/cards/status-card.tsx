import clsxm from "../../libs/clsxm";
import * as React from "react";

const CARD_SIZE = ["sm", "base"] as const;
type CardSize = (typeof CARD_SIZE)[number];
const CARD_STATUS = ["ok", "warning", "off", "maintenance", "plain"] as const;
type CardStatus = (typeof CARD_STATUS)[number];

type StatusCardProps = {
	size?: CardSize;
	cardstatus?: CardStatus;
} & React.ComponentPropsWithoutRef<"div">;

export default function StatusCard({
	className,
	size = "base",
	cardstatus,
	...rest
}: StatusCardProps) {
	return (
		<div
			className={clsxm(
				"bg-background",
				[
					size === "sm" && ["p-4", "rounded-lg"],
					size === "base" && ["p-2", "rounded-xl"],
				],
				[
					cardstatus === "ok" && ["text-green-500"],
					cardstatus === "warning" && ["text-yellow-500"],
					cardstatus === "off" && ["text-red-500"],
					cardstatus === "maintenance" && ["text-blue-500"],
					cardstatus === "plain" && ["text-black"],
				],
				className
			)}
			{...rest}
		/>
	);
}
