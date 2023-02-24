import { HTMLAttributes, ReactNode } from "react"

type PlacementType = "top" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
type ColorType = "primary" | "secondary" | "tertiary" | "quaternary"
type ModeType = "trigger" | "hover"

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
	isShow: boolean
	closeHandler: () => void
	mainContent: ReactNode
	className?: string
	placement?: PlacementType
	color?: ColorType
	mode?: ModeType
}
