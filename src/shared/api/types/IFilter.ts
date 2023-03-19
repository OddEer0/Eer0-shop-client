type FilterType = "checkbox" | "switch"

export interface IFilter {
	id: string
	name: string
	type: FilterType
	maxValue?: number
	minValue?: number
	value?: string[]
}
