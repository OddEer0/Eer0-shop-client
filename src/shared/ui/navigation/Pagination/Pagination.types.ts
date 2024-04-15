import { ReactPaginateProps } from "react-paginate"

import { ColorType, SizeType } from "@/shared/types"

type VariantType = "standard" | "outlined" | "rounded"

export interface PaginationProps extends ReactPaginateProps {
	className?: string
	variant?: VariantType
	color?: ColorType
	size?: SizeType
}

export interface StyledPaginationProps {
	variant: VariantType
	color: ColorType
	size: SizeType
}

export enum SizeEnum {
	"small" = 30,
	"medium" = 40,
	"large" = 50
}

export enum FontSizeEnum {
	"small" = 16,
	"medium" = 20,
	"large" = 34
}
