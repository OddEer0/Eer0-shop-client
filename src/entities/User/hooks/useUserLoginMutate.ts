import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"

import { IUserLogin, IUserResponse, api } from "@/shared/api"

export const useUserLoginMutate = () => {
	const router = useRouter()
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ["profile"],
		mutationFn: async (user: IUserLogin) => {
			const { data } = await api.post<IUserResponse>("auth/login", user)
			return data
		},
		onSuccess(data) {
			if (data) {
				queryClient.invalidateQueries({ queryKey: ["profile"] })
				router.push("/")
			}
		}
	})

	return mutation
}
