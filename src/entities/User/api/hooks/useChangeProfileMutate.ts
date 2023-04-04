import { useMutation, useQueryClient } from "@tanstack/react-query"

import { IUser, userService } from "@/shared/api"

export const useChangeProfileMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["profile"],
		mutationFn: (data: IUser) => userService.updateUser(data),
		onSuccess(data) {
			if (data) {
				queryClient.setQueryData(["profile"], data)
			}
		}
	})
}
