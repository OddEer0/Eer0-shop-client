import { FC, PropsWithChildren } from "react"

import { cn } from "@/shared/helpers"

import { ButtonGroupWrapper } from "./ButtonGroup.styles"
import { ButtonGroupProps } from "./ButtonGroup.types"

export const ButtonGroup: FC<PropsWithChildren<ButtonGroupProps>> = ({
	direction = "row",
	className = "",
	children,
	...props
}) => {
	return (
		<ButtonGroupWrapper className={cn(direction, className)} {...props}>
			{children}
		</ButtonGroupWrapper>
	)
}
