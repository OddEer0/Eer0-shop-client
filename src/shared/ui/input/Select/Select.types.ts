import { GroupBase, Props } from "react-select"

import { BgType, ColorType, SizeType } from "@/shared/types"

export interface SelectProps<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>
> extends Props<Option, IsMulti, Group> {
	selectColor?: ColorType
	menuBgColor?: BgType
	selectSize?: SizeType
}

export enum SizeWidthEnum {
	"small" = 280,
	"medium" = 340,
	"large" = 400
}

export enum SizeHeightEnum {
	"small" = 30,
	"medium" = 40,
	"large" = 45
}

export interface StyledSelectProps {
	selectColor: ColorType
	menuBgColor: BgType
	selectSize: SizeType
}

export interface ISelectOption {
	label: string
	value: string
}
