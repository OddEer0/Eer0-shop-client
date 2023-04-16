import { IDevice } from "./IDevice"

export interface ICart {
	userId: string
	devices: IDevice[]
}

export interface IAddToCart {
	userId: string
	deviceId: string
}

export interface IRemoveFromCart {
	userId: string
	deviceId: string
}
