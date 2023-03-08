import { QueryClient } from "@tanstack/react-query"

import { IUser, api } from "../api"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

queryClient.setQueryDefaults(["profile"], {
	queryFn: async () => {
		const res = await api.get<IUser>("auth/refresh")
		return res.data
	},
	retry: false,
	cacheTime: Infinity,
	staleTime: Infinity
})
