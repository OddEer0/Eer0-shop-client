type VariantType = "square" | "rounded" | "circle"

export interface StyledSkeletonType {
	width?: string
	height?: string
	maxWidth?: string
	maxHeight?: string
	minWidth?: string
	minHeight?: string
	background?: string
	animateBackground?: string
}

export interface SkeletonProps extends StyledSkeletonType {
	variant?: VariantType
	className?: string
}
