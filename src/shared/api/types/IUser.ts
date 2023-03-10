import { IRole } from "./IRole"

export interface IUser {
	id: string
	email: string
	nickname: string
	firstName: string
	lastName: string
	birthday: Nullable<Date>
	isActivate: boolean
	avatar: Nullable<string>
	isBanned: boolean
	banReason: Nullable<string>
	roles: IRole[]
}

export interface IUserLoginBody {
	nickname: string
	password: string
}

export interface IUserRegistrationBody extends IUserLoginBody {
	email: string
	firstName: string
	lastName: string
}
