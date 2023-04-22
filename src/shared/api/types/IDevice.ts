import { IBrand } from "./IBrand"
import { ICategory } from "./ICategory"
import { IComment } from "./IComment"
import { IInfo } from "./IInfo"

export interface IDevice {
	id: string
	name: string
	description: string
	price: string
	stock: Nullable<string>
	stockPercent: Nullable<string>
	count: string
	images: string[]
	createdAt: Date
	updatedAt: Date
}

export interface IDevice$Infos extends IDevice {
	infos: IInfo[]
}

export interface IDevice$Category extends IDevice {
	category: ICategory
}

export interface IDevice$Brand extends IDevice {
	brand: IBrand
}

export interface IDevice$Comments extends IDevice {
	comments: IComment[]
}

export interface IDeviceAxiosResponse {
	pageCount: number
	devices: IDevice[]
}

export interface IDevice$InfosAndBrand {
	infos: IInfo[]
	brand: IBrand
}
