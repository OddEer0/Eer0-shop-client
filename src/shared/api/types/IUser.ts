import { IRole } from "./IRole"
import { ITokens } from "./ITokens"

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

export interface IUserRegistration {
	email: string
	nickname: string
	password: string
	firstName: string
	lastName: string
}

export interface IUserLogin {
	nickname: string
	password: string
}

export interface IUserResponse {
	user: IUser
	tokens: ITokens
}
