export interface IUser {
	id: string
	email: string
	nickname: string
	firstName: string
	subTitle: Nullable<string>
	lastName: string
	birthday: Nullable<Date>
	isActivate: boolean
	avatar: Nullable<string>
	isBanned: boolean
	banReason: Nullable<string>
	roles: string[]
	isAdmin: boolean
	isModerator: boolean
	isDeveloper: boolean
	isEmployee: boolean
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
