import { IDevice } from "./IDevice"

export interface IRefound {
	id: string
	count: number
	deviceId: string
	userId: string
	device: IDevice
}
