import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { userService } from "@/shared/api"

import { AVATAR_CHANGE_SUCCESS } from "../constants"

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
				toast.success(AVATAR_CHANGE_SUCCESS)
				queryClient.setQueryData(["profile"], data)
			}
		}
	})
}
