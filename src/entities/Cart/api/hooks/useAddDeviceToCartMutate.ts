import { useMutation, useQueryClient } from "@tanstack/react-query"

import { IAddToCart, cartService } from "@/shared/api"

export const useAddDeviceToCartMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["cart", "add"],
		mutationFn: (formData: IAddToCart) => cartService.addDeviceToCart(formData),
		onSuccess(data) {
			queryClient.setQueryData(["cart"], data)
		}
	})
}
