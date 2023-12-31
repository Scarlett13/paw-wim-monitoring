import * as React from "react";

import UnstyledLink, { UnstyledLinkProps } from "./unstyled-link";
import clsxm from "../../libs/clsxm";

const PrimaryLinkSize = ["sm", "base"] as const;

const PrimaryLinkVariant = ["primary", "basic"] as const;
type PrimaryLinkProps = {
	size?: (typeof PrimaryLinkSize)[number];
	variant?: (typeof PrimaryLinkVariant)[number];
} & UnstyledLinkProps;

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
	(
		{ className, children, variant = "primary", size = "base", ...rest },
		ref
	) => {
		return (
			<UnstyledLink
				ref={ref}
				{...rest}
				className={clsxm(
					"inline-flex items-center",
					"focus-visible:ring-primary-500 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2",
					"font-medium",
					//#region  //*=========== Size ===========
					size === "sm" && "text-xs md:text-sm ",
					size === "base" && "text-sm md:text-base",
					//#region  //*=========== Variant ===========
					variant === "primary" && [
						"text-primary-500 hover:text-primary-600 active:text-primary-700",
						"disabled:text-primary-200",
					],
					variant === "basic" && [
						"text-black hover:text-gray-600 active:text-gray-800",
						"disabled:text-gray-300",
					],
					//#endregion  //*======== Variant ===========
					className
				)}
			>
				{children}
			</UnstyledLink>
		);
	}
);

export default PrimaryLink;
