import { IBrand } from "./IBrand"
import { IFilter } from "./IFilter"

export interface ICategory {
	id: string
	name: string
	title: string
	img: string
}

export interface ICategoryAxiosResponse extends ICategory {
	brands: IBrand[]
	filters: IFilter[]
}
