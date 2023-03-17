import { HTMLAttributes, ReactNode } from "react"

type ColorType = "primary" | "secondary" | "tertiary" | "quaternary" | "success" | "danger" | "warning"
type VariantType = "outlined" | "standard" | "rounded"
type SizeType = "small" | "medium" | "large"

export enum SizeEnum {
	"small" = "30px",
	"medium" = "45px",
	"large" = "60px"
}

export enum FontSizeEnum {
	"small" = "16px",
	"medium" = "22px",
	"large" = "28px"
}

export interface StyledPaginationProps {
	color: ColorType
	variant: VariantType
	size: SizeType
}

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
	color?: ColorType
	variant?: VariantType
	size?: SizeType
	nextArrow?: Nullable<ReactNode>
	prevArrow?: Nullable<ReactNode>
	count: number
	defaultCount?: number
	siblingCount?: number
	boundaryCount?: number
	range?: number
	className?: string
	layoutId?: string
	changeHandle?: Nullable<(value: number) => void>
}
