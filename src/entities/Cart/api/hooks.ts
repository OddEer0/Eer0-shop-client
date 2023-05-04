import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"

import { ICart, IPostCartAdd, cartService } from "@/shared/api"

export const useCartQuery = <T = ICart[]>(select?: (data: Nullable<ICart[]>) => T) => {
	return useQuery(["cart"], {
		queryFn: () => {
			if (typeof window !== "undefined" && Cookies.get("isAuth")) {
				return cartService.getCartByToken()
			}
			return null
		},
		select,
		retry: false,
		cacheTime: Infinity,
		staleTime: Infinity
	})
}

export const useAddDeviceToCartMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["cart", "add"],
		mutationFn: (formData: IPostCartAdd) => cartService.addDeviceToCart(formData),
		onSuccess(data) {
			queryClient.setQueryData(["cart"], data)
		}
	})
}

export const useRemoveDeviceFromCartMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["cart", "remove"],
		mutationFn: (cartId: string) => cartService.removeDeviceFromCart(cartId),
		onSuccess(data) {
			queryClient.setQueryData(["cart"], data)
		}
	})
}
