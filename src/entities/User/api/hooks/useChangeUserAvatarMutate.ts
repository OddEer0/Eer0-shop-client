import { useMutation, useQueryClient } from "@tanstack/react-query"

import { userService } from "@/shared/api"

interface IChangeAvatarMutate {
	id: string
	image: Blob
}

export const useChangeUserAvatarMutate = () => {
	const queryClient = useQueryClient()

	return useMutation(({ id, image }: IChangeAvatarMutate) => userService.updateUserAvatar(id, image), {
		mutationKey: ["profile"],
		onSuccess(data) {
			if (data) {
				queryClient.setQueryData(["profile"], data)
			}
		}
	})
}
