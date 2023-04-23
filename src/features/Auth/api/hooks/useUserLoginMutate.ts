import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"

import { IUser, IUserLoginBody, api } from "@/shared/api"

export const useUserLoginMutate = () => {
	const router = useRouter()
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ["profile"],
		mutationFn: async (user: IUserLoginBody) => {
			const { data } = await api.post<IUser>("auth/login", user)
			return data
		},
		onSuccess(data) {
			if (data) {
				localStorage.setItem("isAuth", "true")
				queryClient.setQueryData(["profile"], data)
				queryClient.refetchQueries({ queryKey: ["cart"] })
				router.push("/")
			}
		}
	})

	return mutation
}
