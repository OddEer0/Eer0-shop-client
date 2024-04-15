import { ColorType, SizeType } from "@/shared/types"

export interface UploadProps {
	uploadSize?: SizeType
	color?: ColorType
	className?: string
	isDefaultIcon?: boolean
}

export interface UploadStyledProps {
	size: SizeType
	color: ColorType
}

export enum SizePaddingYEnum {
	"small" = 8,
	"medium" = 10,
	"large" = 12
}

export enum SizePaddingXEnum {
	"small" = 16,
	"medium" = 22,
	"large" = 28
}

export enum SizeFontEnum {
	"small" = 16,
	"medium" = 18,
	"large" = 22
}
