import { IDevice } from "./IDevice"
import { IUser } from "./IUser"

export interface IComment {
	id: string
	userId: string
	deviceId: string
	description: string
	like: number
	dislike: number
	createdAt: Date
	updatedAt: Date
}

export interface IComment$Device extends IComment {
	device: IDevice
}

export interface IComment$Avatar extends IComment {
	user: { avatar: Nullable<string>; firstName: string; lastName: string }
}

export interface IComment$User extends IComment {
	user: IUser
}

export interface IComment$DeviceUser extends IComment$Device {
	user: IUser
}

export type IPostComment = Pick<IComment, "description" | "deviceId" | "userId">
