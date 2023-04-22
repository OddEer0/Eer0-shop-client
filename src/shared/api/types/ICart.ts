import { IDevice } from "./IDevice"

export interface ICartDevice {
	id: string
	count: number
	cartId: string
	deviceId: string
	device: IDevice
}

export interface ICart {
	id: string
	count: number
	userId: string
	deviceId: string
	device: IDevice
}

export interface IPostCartAdd {
	userId: string
	deviceId: string
}

export interface ISetCountCartDevice {
	cartDeviceId: string
	count: number
}
