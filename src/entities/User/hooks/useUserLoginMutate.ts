import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"

import { IUser, IUserLogin, api } from "@/shared/api"

export const useUserLoginMutate = () => {
	const router = useRouter()
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ["profile"],
		mutationFn: async (user: IUserLogin) => {
			const { data } = await api.post<IUser>("auth/login", user)
			return data
		},
		onSuccess(data) {
			if (data) {
				queryClient.setQueryData(["profile"], data)
				router.push("/")
			}
		}
	})

	return mutation
}
