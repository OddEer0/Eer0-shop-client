import { HTMLAttributes } from "react"

type VariantType = "content" | "dot"
type OverlapType = "square" | "circular"
type ColorType = "primary" | "secondary" | "tertiary" | "quaternary" | "success" | "warning" | "danger" | "default"
type HorizontalType = "left" | "right"
type VerticalType = "top" | "bottom"
type SizeType = "large" | "medium" | "small"

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
	content?: number
	maxValue?: number
	variant?: VariantType
	classNameBadge?: string
	overlap?: OverlapType
	horizontal?: HorizontalType
	vertical?: VerticalType
	className?: string
	size?: SizeType
	color?: ColorType
}
