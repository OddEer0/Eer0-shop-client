import { FC, PropsWithChildren } from "react"

import { cn } from "@/shared/helpers"
import { useOutsideClick } from "@/shared/hooks"

import { DropdownWrapper } from "./Dropdown.styles"
import { DropdownProps } from "./Dropdown.types"

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
	mainContent,
	closeHandler,
	isShow,
	placement = "bottom",
	color = "primary",
	className = "",
	mode = "hover",
	children,
	...props
}) => {
	const cl = cn("dropdown", "prefix", placement, mode, color, isShow ? "show" : "", className)

	const ref = useOutsideClick<HTMLDivElement>(closeHandler)

	return (
		<DropdownWrapper>
			{mainContent}
			<div ref={ref} className={cl} {...props}>
				{children}
			</div>
		</DropdownWrapper>
	)
}
