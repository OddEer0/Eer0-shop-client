import { toast } from "react-toastify"

import { findDeviceQuerySelector, useCartQuery } from "@/entities/Cart"
import { useProfileQuery, userIdQuerySelector } from "@/entities/User"

import { UNAUTHORIZED } from "@/shared/constants"

import { useAddDeviceToCartMutate } from "../api"

export const useAddToCart = (id: string) => {
	const { data: isToCart, isFetching } = useCartQuery(findDeviceQuerySelector(id))
	const { mutate: addMutate, isLoading: isAddLoading } = useAddDeviceToCartMutate()
	const { data: userId } = useProfileQuery(userIdQuerySelector)

	const addDeviceToCartHandler = () => {
		if (userId) {
			addMutate({ deviceId: id, userId })
		} else {
			toast.error(UNAUTHORIZED)
		}
	}

	return {
		addDeviceToCartHandler,
		isToCart,
		isAddLoading,
		isFetching
	}
}
