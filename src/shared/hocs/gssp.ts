import { QueryClient } from "@tanstack/react-query"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"

import { RoleEnum, authService } from "../api"
import { CART_KEY, LOGIN_ROUTE, PROFILE_KEY } from "../constants"

export interface AuthGuard<T> {
	callback: (ctx: GetServerSidePropsContext, queryClient: QueryClient) => Promise<GetServerSidePropsResult<T>>
	roles?: RoleEnum[]
}

export const AuthGuard = <T>({
	callback,
	roles
}: AuthGuard<T>): ((ctx: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<T>>) => {
	const queryClient = new QueryClient()
	return async (context: GetServerSidePropsContext) => {
		const auth = await authService.authGuard(context, roles)

		if (auth) {
			queryClient.setQueryData(PROFILE_KEY, auth.user)
			queryClient.setQueryData(CART_KEY, auth.cart)
		} else {
			queryClient.setQueryData(PROFILE_KEY, null)
			queryClient.setQueryData(CART_KEY, null)

			return {
				redirect: {
					destination: LOGIN_ROUTE,
					statusCode: 302
				}
			}
		}
		return await callback(context, queryClient)
	}
}
