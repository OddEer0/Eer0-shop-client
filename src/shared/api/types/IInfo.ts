import { IDevice } from "./IDevice"

export interface IInfo {
	id: string
	name: string
	value: string
}

export interface IInfoWithDevices extends IInfo {
	devices: IDevice[]
}
