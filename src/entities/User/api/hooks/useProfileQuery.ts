import { useQuery } from "@tanstack/react-query"
import Cookies from "js-cookie"

import { IUser, authService } from "@/shared/api"

export const useProfileQuery = <T = IUser>(select?: (data: Nullable<IUser>) => T) => {
	return useQuery(["profile"], {
		queryFn: () => {
			if (typeof window !== "undefined" && Cookies.get("isAuth")) {
				return authService.auth()
			}
			return null
		},
		retry: false,
		cacheTime: Infinity,
		staleTime: Infinity,
		select
	})
}
