import { QueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"

import { ICart, authService, cartService } from "../api"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

queryClient.setQueryDefaults(["profile"], {
	queryFn: () => {
		if (typeof window !== "undefined" && Cookies.get("isAuth")) {
			return authService.auth()
		}
		return null
	},
	retry: false,
	cacheTime: Infinity,
	staleTime: Infinity
})

queryClient.setQueryDefaults(["cart"], {
	queryFn(): Nullable<Promise<ICart>> {
		if (Cookies.get("isAuth")) {
			return cartService.getCartByToken()
		}
		return null
	},
	retry: false,
	cacheTime: Infinity,
	staleTime: Infinity
})
