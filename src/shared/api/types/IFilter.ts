import { IInfo } from "./IInfo"

type FilterType = "checkboxList"

export interface IFilter {
	id: string
	name: string
	type: FilterType
	title: string
	maxValue?: number
	minValue?: number
	value?: string[]
}

export interface IFilterWithInfo extends IFilter {
	infos: IInfo[]
}
