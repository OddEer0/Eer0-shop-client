import { useMutation, useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

import { IUser, IUserLoginBody, api } from "@/shared/api"
import { CART_KEY } from "@/shared/constants"

import { LOGIN_SUCCESS } from "../constants"

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
				queryClient.setQueryData(["profile"], data)
				queryClient.refetchQueries({ queryKey: ["cart"] })
				router.push("/")
				toast.success(LOGIN_SUCCESS)
				Cookies.set("isAuth", "true", { expires: 30 })
				queryClient.refetchQueries({ queryKey: CART_KEY })
			}
		}
	})

	return mutation
}
