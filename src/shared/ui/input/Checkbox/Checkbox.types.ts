import { InputHTMLAttributes, ReactNode } from "react"

type SizeType = "small" | "medium" | "large"
type ColorType = "primary" | "secondary" | "tertiary" | "quaternary" | "success" | "danger" | "warning"
type PlacementType = "top" | "bottom" | "left" | "right"

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	checkboxSize?: SizeType
	color?: ColorType
	label?: Nullable<string>
	placement?: PlacementType
	uncheckedIcon?: Nullable<ReactNode>
	checkedIcon?: Nullable<ReactNode>
	className?: string
}
