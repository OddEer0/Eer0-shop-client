export type OrderType = "asc" | "desc"

export interface ISortSelectOption {
	value: string
	label: string
	sortBy: string
	order: OrderType
}

export const SORT_SELECT_OPTIONS: ISortSelectOption[] = [
	{ value: "popular", label: "Сначала популярные", sortBy: "rate", order: "desc" },
	{ value: "unpopular", label: "Сначала не популярные", sortBy: "rate", order: "asc" },
	{ value: "new", label: "Сначала новые", sortBy: "createdAt", order: "desc" },
	{ value: "old", label: "Сначала старые", sortBy: "createdAt", order: "asc" },
	{ value: "cheap", label: "Сначала дешевые", sortBy: "price", order: "asc" },
	{ value: "expensive", label: "Сначала дорогие", sortBy: "price", order: "desc" }
]
