import { IDevice } from "./IDevice"
import { IUser } from "./IUser"

export interface IComment {
	id: string
	description: string
	like: number
	dislike: number
}

export interface ICommentWithDevice extends IComment {
	device: IDevice
}

export interface ICommentWithUser extends IComment {
	user: IUser
}
