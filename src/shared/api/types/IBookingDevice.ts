import { IDevice } from "./IDevice"

export interface IBookingDevice {
	id: string
	count: number
	device: IDevice
	deviceId: string
	userId: string
}
