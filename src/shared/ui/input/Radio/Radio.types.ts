import { InputHTMLAttributes, ReactNode } from "react"

type PlacementType = "top" | "bottom" | "left" | "right"
type SizeType = "small" | "medium" | "large"
type ColorType = "primary" | "secondary" | "tertiary" | "quaternary" | "success" | "danger" | "warning"

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	placement?: PlacementType
	radioSize?: SizeType
	color?: ColorType
	className?: string
	uncheckedIcon?: Nullable<ReactNode>
	checkedIcon?: Nullable<ReactNode>
	label?: Nullable<string>
}
