import clsxm from "../../libs/clsxm";
import clsx from "clsx";
import * as React from "react";

type MacCardProps = {
	childrenClassName?: string;
	mode?: "dark" | "light";
} & React.ComponentPropsWithoutRef<"div">;

export default function MacCard({
	className,
	children,
	childrenClassName,
	mode = "dark",
	...rest
}: MacCardProps) {
	return (
		<div
			className={clsxm(
				"overflow-hidden rounded-lg",
				mode === "light" && "border-typo-divider border shadow-sm",
				className
			)}
			{...rest}
		>
			<div
				data-id="card-bar-with-three-dots"
				className={clsx([
					"flex gap-1 p-2",
					[mode === "dark" && ["bg-dark"], mode === "light" && ["bg-light"]],
				])}
			>
				<div className="h-2 w-2 rounded-full bg-rose-500" />
				<div className="h-2 w-2 rounded-full bg-amber-500" />
				<div className="h-2 w-2 rounded-full bg-green-400" />
			</div>
			<div
				className={clsxm([
					"bg-neutral-100 p-4",
					[
						mode === "dark" && ["bg-neutral-100"],
						mode === "light" && ["bg-background"],
					],
					childrenClassName,
				])}
			>
				{children}
			</div>
		</div>
	);
}
