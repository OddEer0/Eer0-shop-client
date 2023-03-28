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
	type: string
	count: string
	images: string[]
}

export interface IDeviceWithInfo extends IDevice {
	infos: IInfo[]
}

export interface IDeviceWithCategory extends IDevice {
	category: ICategory
}

export interface IDeviceWithBrand extends IDevice {
	brand: IBrand
}

export interface IDeviceWithComments extends IDevice {
	comments: IComment[]
}

export interface IDeviceAxiosResponse {
	totalPage: number
	devices: IDevice[]
}

export interface IDeviceWithInfoAndBrand {
	infos: IInfo[]
	brand: IBrand
}
