import { HTMLAttributes } from "react"

type VariantType = "outlined" | "contained" | "text"
type ColorType = "primary" | "secondary" | "danger" | "warning" | "success"
type SizeType = "small" | "medium" | "large"

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: VariantType
	color?: ColorType
	size?: SizeType
	isLoading?: boolean
	className?: string
}
