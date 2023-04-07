import { IUser } from "@/shared/api"

export const userAvatarQuerySelector = (user: IUser) => {
	if (!user) {
		return null
	}
	return {
		id: user.id,
		avatar: user.avatar,
		firstName: user.firstName
	}
}
