import { useMutation, useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

import { authService } from "@/shared/api"

import { LOGOUT_SUCCESS } from "../constants"

export const useLogoutMutate = (callback?: () => void) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["logout"],
		mutationFn: () => authService.logout(),
		onSuccess() {
			if (callback) {
				callback()
			}
			queryClient.setQueryData(["profile"], null)
			queryClient.setQueryData(["cart"], null)
			Cookies.remove("isAuth")
			toast.success(LOGOUT_SUCCESS)
		}
	})
}
