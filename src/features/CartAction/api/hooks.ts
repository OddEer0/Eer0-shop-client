import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { IPostCartAdd, ISetCountCartDevice, cartService } from "@/shared/api"

import { SUCCESS_ADD_CART_DEVICE, SUCCESS_REMOVE_CART_DEVICE, SUCCESS_SET_COUNT_CART_DEVICE } from "../lib"

export const useAddDeviceToCartMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["cart", "add"],
		mutationFn: (formData: IPostCartAdd) => cartService.addDeviceToCart(formData),
		onSuccess(data) {
			queryClient.setQueryData(["cart"], data)
			toast.success(SUCCESS_ADD_CART_DEVICE)
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
			toast.success(SUCCESS_REMOVE_CART_DEVICE)
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
			toast.success(SUCCESS_SET_COUNT_CART_DEVICE)
		}
	})
}
