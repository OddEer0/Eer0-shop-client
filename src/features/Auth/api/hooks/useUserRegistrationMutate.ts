import { useMutation, useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

import { IUser, IUserRegistrationBody, api } from "@/shared/api"
import { CART_KEY } from "@/shared/constants"

import { REGISTRATION_SUCCESS } from "../constants"

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
				client.setQueryData(["profile"], data)
				client.invalidateQueries({ queryKey: ["cart"] })
				router.push("/")
				toast.success(REGISTRATION_SUCCESS)
				Cookies.set("isAuth", "true", { expires: 30 })
				client.refetchQueries({ queryKey: CART_KEY })
			}
		}
	})

	return mutation
}
