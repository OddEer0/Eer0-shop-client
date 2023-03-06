import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Cookies from "js-cookie"
import { FC, PropsWithChildren } from "react"

import { IUser, api } from "@/shared/api"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

queryClient.setQueryDefaults(["profile"], {
	queryFn: async () => {
		if (Cookies.get("accessToken")) {
			const res = await api.get<IUser>("users/profile")
			return res.data
		}
		return null
	},
	retry: false
})

export const WithQueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
