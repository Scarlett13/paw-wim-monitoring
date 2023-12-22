import * as React from "react";

import UnstyledLink, { UnstyledLinkProps } from "./unstyled-link";
import clsxm from "@/src/libs/clsxm";

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
	({ children, className, ...rest }, ref) => {
		return (
			<UnstyledLink
				ref={ref}
				{...rest}
				className={clsxm(
					"animated-underline custom-link inline-flex items-center font-medium",
					"focus-visible:ring-primary-500 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2",
					"border-dark border-b border-dotted hover:border-black/0",
					className
				)}
			>
				{children}
			</UnstyledLink>
		);
	}
);

export default UnderlineLink;
