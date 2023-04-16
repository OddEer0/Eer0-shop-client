import { QueryClient } from "@tanstack/react-query"

import { ICart, cartService, userService } from "../api"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

queryClient.setQueryDefaults(["profile"], {
	queryFn: () => {
		if (typeof window !== "undefined" && localStorage.getItem("isAuth")) {
			return userService.getProfile()
		}
		return null
	},
	retry: false,
	cacheTime: Infinity,
	staleTime: Infinity
})

queryClient.setQueryDefaults(["cart"], {
	queryFn(): Nullable<Promise<ICart>> {
		if (typeof window !== "undefined" && localStorage.getItem("isAuth")) {
			return cartService.getCartByToken()
		}
		return null
	},
	retry: false,
	cacheTime: Infinity,
	staleTime: Infinity
})
