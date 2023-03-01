import { InputHTMLAttributes, ReactNode } from "react"

type SizeType = "small" | "medium" | "large"
type ColorType = "primary" | "secondary" | "tertiary" | "quaternary" | "success" | "danger" | "warning"

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: Nullable<ReactNode>
	switchSize?: SizeType
	color?: ColorType
	className?: string
}
