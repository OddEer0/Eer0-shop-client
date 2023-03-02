type VariantType = "standard" | "snake" | "double-snake"
type ColorType = "primary" | "secondary" | "tertiary" | "quaternary"
type SizeType = "small" | "medium" | "large"

export interface SpinnerProps {
	variant?: VariantType
	color?: ColorType
	size?: SizeType
	className?: string
}
