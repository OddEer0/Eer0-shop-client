import { IDevice } from "./IDevice"
import { IFilter } from "./IFilter"

export interface IInfo {
	id: string
	name: string
	title: string
	value: string
	filterId: string
}

export interface IInfo$Devices extends IInfo {
	devices: IDevice[]
}

export interface IInfo$Filter extends IInfo {
	filter: IFilter
}
