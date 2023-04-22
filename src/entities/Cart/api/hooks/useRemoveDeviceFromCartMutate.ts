import { useMutation, useQueryClient } from "@tanstack/react-query"

import { cartService } from "@/shared/api"

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
