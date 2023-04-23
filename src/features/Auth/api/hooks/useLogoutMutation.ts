import { useMutation, useQueryClient } from "@tanstack/react-query"

import { authService } from "@/shared/api"
import { useSsr } from "@/shared/hooks"

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
		}
	})
}
