import { QueryClient } from "@tanstack/react-query"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"

import { RoleEnum, authService } from "@/shared/api"
import { CART_KEY, LOGIN_ROUTE, PROFILE_KEY } from "@/shared/constants"

import { GSSPTheme } from "../lib"

interface AuthGuardContext {
	ctx: GetServerSidePropsContext
	queryClient: QueryClient
	store: AppStore
}

export interface AuthGuard<T> {
	next: (context: AuthGuardContext) => Promise<GetServerSidePropsResult<T>>
	roles?: RoleEnum[]
}

export const AuthGuard = <T>({
	next,
	roles
}: AuthGuard<T>): ((ctx: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<T>>) => {
	const queryClient = new QueryClient()
	return async (context: GetServerSidePropsContext) => {
		const auth = await authService.authGuard(context, roles)
		const store = GSSPTheme(context)

		if (!auth) {
			return {
				redirect: {
					destination: LOGIN_ROUTE,
					statusCode: 302
				}
			}
		}
		await queryClient.prefetchQuery(PROFILE_KEY, () => auth?.user || null)
		await queryClient.prefetchQuery(CART_KEY, () => auth?.cart || null)

		return await next({ ctx: context, queryClient, store: JSON.parse(JSON.stringify(store.getState())) })
	}
}
