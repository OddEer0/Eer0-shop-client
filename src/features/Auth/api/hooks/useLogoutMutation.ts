import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { authService } from "@/shared/api"
import { useSsr } from "@/shared/hooks"

import { LOGOUT_SUCCESS } from "../constants"

export const useLogoutMutate = (callback?: () => void) => {
	const { isBrowser } = useSsr()
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
			if (isBrowser) {
				localStorage.removeItem("isAuth")
			}
			toast.success(LOGOUT_SUCCESS)
		}
	})
}
