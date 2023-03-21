import { IDevice } from "./IDevice"

export interface IBrand {
	id: string
	name: string
}

export interface IBrandWithDevice {
	devices: IDevice[]
}
