import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"

import { IUser, IUserRegistrationBody, api } from "@/shared/api"

export const useUserRegistrationMutate = () => {
	const router = useRouter()
	const client = useQueryClient()

	const mutation = useMutation({
		mutationKey: ["profile"],
		mutationFn: async (user: IUserRegistrationBody) => {
			const { data } = await api.post<IUser>("auth/registration", user)
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
