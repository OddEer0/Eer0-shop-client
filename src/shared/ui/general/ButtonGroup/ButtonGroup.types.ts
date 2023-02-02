import { HTMLAttributes } from "react"

type DirectionType = "row" | "column"

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
	direction?: DirectionType
	className?: string
}
