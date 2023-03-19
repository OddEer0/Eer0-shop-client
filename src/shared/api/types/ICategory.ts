import { IDevice } from "./IDevice"
import { IFilter } from "./IFilter"

export interface ICategory {
	id: string
	name: string
	img: string
}

export interface ICategoryWithDevices extends ICategory {
	devices: IDevice[]
}

export interface ICategoryWithFilters extends ICategory {
	filters: IFilter[]
}

export interface ICategoryFull extends ICategory {
	filters: IFilter[]
	devices: IDevice[]
}
