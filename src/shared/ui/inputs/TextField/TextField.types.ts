import { InputHTMLAttributes, ReactNode } from "react"

type InputType = "text" | "password" | "number"

type VariantType = "outlined" | "standard" | "filled"

type ColorType = "primary" | "secondary" | "success" | "danger" | "warning"

type SizeType = "small" | "medium" | "large"

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	color?: ColorType
	variant?: VariantType
	endIcon?: Nullable<ReactNode>
	startIcon?: Nullable<ReactNode>
	type?: InputType
	subText?: Nullable<string>
	label?: Nullable<string>
	className?: string
	inputSize?: SizeType
}
