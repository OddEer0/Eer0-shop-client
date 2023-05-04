import { QueryClient } from "@tanstack/react-query"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"

import { RoleEnum, authService } from "@/shared/api"
import { CART_KEY, LOGIN_ROUTE, PROFILE_KEY } from "@/shared/constants"

import { GSSPTheme } from "../lib"

interface AuthGuardContext {
	ctx: GetServerSidePropsContext
	queryClient: QueryClient
	store: Nullable<AppStore>
}

export interface AuthGuardTypes<T> {
	next: (context: AuthGuardContext) => Promise<GetServerSidePropsResult<T>>
	roles?: RoleEnum[]
	redirectURL?: string
	isSsrTheme?: boolean
	isRedirect?: boolean
}

export const AuthGuard = <T>({
	next,
	roles,
	redirectURL = LOGIN_ROUTE,
	isSsrTheme = true,
	isRedirect = true
}: AuthGuardTypes<T>): ((ctx: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<T>>) => {
	const queryClient = new QueryClient()
	return async (context: GetServerSidePropsContext) => {
		const auth = await authService.authGuard(context, roles)
		let store
		if (isSsrTheme) {
			store = GSSPTheme(context)
		}

		if (!auth && isRedirect) {
			return {
				redirect: {
					destination: redirectURL,
					statusCode: 302
				}
			}
		}
		await queryClient.prefetchQuery(PROFILE_KEY, () => auth?.user || null)
		await queryClient.prefetchQuery(CART_KEY, () => auth?.cart || null)

		return await next({ ctx: context, queryClient, store: store ? JSON.parse(JSON.stringify(store.getState())) : null })
	}
}

interface SSRThemeTypes {
	ctx: GetServerSidePropsContext
	store: AppStore
}

export const SSRTheme =
	<T>(
		next: (context: SSRThemeTypes) => Promise<GetServerSidePropsResult<T>>
	): ((ctx: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<T>>) =>
	async (ctx: GetServerSidePropsContext) => {
		const store = GSSPTheme(ctx)

		return await next?.({ ctx, store: JSON.parse(JSON.stringify(store.getState())) })
	}
