import { useMutation, useQueryClient } from "@tanstack/react-query"

import { IRemoveFromCart, cartService } from "@/shared/api"

export const useRemoveDeviceFromCartMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["cart", "remove"],
		mutationFn: (formData: IRemoveFromCart) => cartService.removeDeviceFromCart(formData),
		onSuccess(data) {
			queryClient.setQueryData(["cart"], data)
		}
	})
}
