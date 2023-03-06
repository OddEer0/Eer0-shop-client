import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"

import { IUserRegistration, IUserResponse, api } from "@/shared/api"

export const useUserRegistrationMutate = () => {
	const router = useRouter()
	const client = useQueryClient()

	const mutation = useMutation({
		mutationKey: ["profile"],
		mutationFn: async (user: IUserRegistration) => {
			const { data } = await api.post<IUserResponse>("auth/registration", user)
			return data
		},
		onSuccess(data) {
			if (data) {
				client.invalidateQueries({ queryKey: ["profile"] })
				router.push("/")
			}
		}
	})

	return mutation
}
