import { IDevice } from "./IDevice"

export interface ICart {
	id: string
	count: number
	userId: string
	deviceId: string
	devices: IDevice[]
}

export interface IPostCartAdd {
	userId: string
	deviceId: string
}
