import { IBrand } from "./IBrand"
import { IDevice } from "./IDevice"
import { IFilter } from "./IFilter"

export interface ICategory {
	id: string
	name: string
	title: string
	img: string
}

export interface ICategory$Devices extends ICategory {
	devices: IDevice[]
}

export interface ICategory$Brands extends ICategory {
	brands: IBrand[]
}

export interface ICategory$Filters extends ICategory {
	filters: IFilter[]
}

export interface ICategory$BrandsFilters extends ICategory {
	brands: IBrand[]
	filters: IFilter[]
}
