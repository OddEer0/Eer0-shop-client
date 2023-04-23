import { ICategory } from "./ICategory"
import { IDevice } from "./IDevice"

export interface IBrand {
	id: string
	name: string
}

export interface IBrand$Device extends IBrand {
	device: IDevice[]
}

export interface IBrand$Categories extends IBrand {
	categories: ICategory[]
}

export interface IBrand$All extends IBrand {
	device: IDevice[]
	categories: ICategory[]
}

export interface IPostBrand {
	name: string
}

export interface IPutBrand {
	id?: string
	name?: string
}
