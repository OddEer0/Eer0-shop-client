import { FC, PropsWithChildren } from "react"

import { cn } from "@/shared/helpers"

import { DividerWrapper } from "./Divider.styles"
import { DividerProps } from "./Divider.types"

export const Divider: FC<PropsWithChildren<DividerProps>> = ({
	textAlign = "center",
	orientation = "horizontal",
	className = "",
	children
}) => {
	return (
		<DividerWrapper className={cn("prefix", orientation, textAlign, className)}>
			<span className="left-divider"></span>
			{children}
			<span className="right-divider"></span>
		</DividerWrapper>
	)
}
