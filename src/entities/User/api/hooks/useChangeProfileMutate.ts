import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { IUser, userService } from "@/shared/api"

import { PROFILE_CHANGE_ACCESS } from "../constants"

export const useChangeProfileMutate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["profile"],
		mutationFn: (data: IUser) => userService.updateUser(data),
		onSuccess(data) {
			if (data) {
				queryClient.setQueryData(["profile"], data)
				toast.success(PROFILE_CHANGE_ACCESS)
			}
		}
	})
}
