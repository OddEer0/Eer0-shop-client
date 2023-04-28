import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { IPostCartAdd, ISetCountCartDevice, cartService } from "@/shared/api"

export const useAddDeviceToCartMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["cart", "add"],
		mutationFn: (formData: IPostCartAdd) => cartService.addDeviceToCart(formData),
		onSuccess(data) {
			queryClient.setQueryData(["cart"], data)
			toast.success("Добавлен в корзину")
		}
	})
}

export const useRemoveDeviceFromCartMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["cart", "remove"],
		mutationFn: (cartDeviceId: string) => cartService.removeDeviceFromCart(cartDeviceId),
		onSuccess(data) {
			queryClient.setQueryData(["cart"], data)
			toast.success("Удалено из корзины")
		}
	})
}

export const useSetCountCartDeviceMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["addCount-cartDevice"],
		mutationFn: (formData: ISetCountCartDevice) => cartService.setCountCartDevice(formData),
		onSuccess(data) {
			queryClient.setQueryData(["cart"], data)
			toast.success("Количество изменено")
		}
	})
}
