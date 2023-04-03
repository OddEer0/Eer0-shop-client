import { useQuery } from "@tanstack/react-query"

import { IUser, userService } from "@/shared/api"
import { convertMinutesToMs } from "@/shared/helpers"
import { useSsr } from "@/shared/hooks"

export const useUserProfileQuery = <T extends IUser>(id: string, select?: (data: IUser) => T) => {
	const { isBrowser } = useSsr()

	return useQuery(
		["profile", id],
		() => {
			if (id) {
				return userService.getUserProfile(id)
			}
			return userService.getProfile()
		},
		{
			select,
			enabled: !!isBrowser,
			cacheTime: id ? convertMinutesToMs(10) : 0,
			staleTime: convertMinutesToMs(3)
		}
	)
}
