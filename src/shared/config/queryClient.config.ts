import { QueryClient } from "@tanstack/react-query"

import { userService } from "../api"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

queryClient.setQueryDefaults(["profile"], {
	queryFn: () => {
		if (localStorage.getItem("isAuth")) {
			return userService.getProfile()
		}
		return null
	},
	retry: false,
	cacheTime: Infinity,
	staleTime: Infinity
})
