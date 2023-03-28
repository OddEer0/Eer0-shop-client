import { IBrand } from "./IBrand"
import { IFilterWithInfo } from "./IFilter"

export interface ICategory {
	id: string
	name: string
	title: string
	img: string
}

export interface ICategoryAxiosResponse extends ICategory {
	brands: IBrand[]
	filters: IFilterWithInfo[]
}
