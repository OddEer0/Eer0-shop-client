import { useMutation, useQueryClient } from "@tanstack/react-query"

import { authService } from "@/shared/api"

export const useLogoutMutate = (callback?: () => void) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["logout"],
		mutationFn: () => authService.logout(),
		onSuccess() {
			if (callback) {
				callback()
				queryClient.setQueryData(["profile"], null)
				queryClient.setQueryData(["cart"], null)
			}
		}
	})
}
