import { ICategory } from "./ICategory"
import { IInfo } from "./IInfo"

type FilterType = "checkboxList"

export interface IFilter {
	id: string
	name: string
	type: FilterType
	title: string
	maxValue?: number
	minValue?: number
}

export interface IFilter$Infos extends IFilter {
	infos: IInfo[]
}

export interface IFilter$Category extends IFilter {
	category: ICategory
}
