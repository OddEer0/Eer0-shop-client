import { IUser } from "@/shared/api"

export const userAvatarQuerySelector = (user: Nullable<IUser>) => {
	if (!user) {
		return null
	}
	return {
		id: user.id,
		avatar: user.avatar,
		firstName: user.firstName
	}
}

export const userIdQuerySelector = (user: Nullable<IUser>) => {
	if (!user) {
		return null
	}
	return user.id
}
