import { IDevice } from "./IDevice"
import { IUser } from "./IUser"

export interface IComment {
	id: string
	description: string
	like: number
	dislike: number
	createdAt: Date
	updatedAt: Date
}

export interface IComment$Device extends IComment {
	device: IDevice
}

export interface IComment$User extends IComment {
	user: IUser
}

export interface IComment$DeviceUser extends IComment$Device {
	user: IUser
}
