import { ColorType, SizeType } from "@/shared/types"

export interface CounterProps {
	value?: number
	changeValue?: (value: number) => void
	maxValue?: number
	minValue?: number
	setCount?: number
	className?: string
	debounceTime?: number
	color?: ColorType
	size?: SizeType
}

export type StyledCounterProps = Required<Pick<CounterProps, "size" | "color">>

export enum SizeWidthEnum {
	"small" = 150,
	"medium" = 200,
	"large" = 250
}

export enum SizeHeightEnum {
	"small" = 30,
	"medium" = 40,
	"large" = 50
}

export enum SizeFontSizeEnum {
	"small" = 22,
	"medium" = 24,
	"large" = 26
}
