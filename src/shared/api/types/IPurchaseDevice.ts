import { IDevice } from "./IDevice"

export interface IPurchaseDevice {
	id: string
	count: number
	deviceId: string
	userId: string
	device: IDevice
}
