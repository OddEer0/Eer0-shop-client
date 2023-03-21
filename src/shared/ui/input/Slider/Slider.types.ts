import { NouisliderProps } from "nouislider-react"

import { ColorType, SizeType } from "@/shared/types"

export interface SliderProps extends NouisliderProps {
	color?: ColorType
	size?: SizeType
	className?: string
}

export enum SizeBaseEnum {
	"small" = 4,
	"medium" = 6,
	"large" = 8
}

export enum SizeHandleEnum {
	"small" = 16,
	"medium" = 20,
	"large" = 24
}

export interface StyledSliderProps {
	color: ColorType
	size: SizeType
}
