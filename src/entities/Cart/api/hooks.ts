import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { ICart, IPostCartAdd, cartService } from "@/shared/api"

export const useCartQuery = <T = ICart[]>(select?: (data: ICart[]) => T) => {
	return useQuery(["cart"], {
		select,
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
