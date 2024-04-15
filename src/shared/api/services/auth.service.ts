/* eslint-disable import/no-named-as-default-member */
import { AxiosInstance } from "axios"
import { getCookies, removeCookies, setCookie } from "cookies-next"
import { GetServerSidePropsContext } from "next"
import cookie from "set-cookie-parser"

import { api } from "../instance"
import { IUser, RoleEnum } from "../types"

import { cartService } from "./cart.service"

class AuthService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	async logout() {
		await this.api.post("auth/logout")
	}

	async refresh() {
		return await this.api.get<IUser>("auth/refresh")
	}

	async auth() {
		const { data } = await this.api.get<IUser>("auth/refresh")
		return data
	}

	private checkRole(roles: RoleEnum[], userRole: string[]) {
		return roles.some(role => userRole.includes(role))
	}

	async authGuard(ctx: GetServerSidePropsContext, roles?: RoleEnum[]) {
		const { req, res } = ctx

		const cookies = getCookies({ req, res })

		if (cookies.refreshToken) {
			try {
				api.defaults.headers.cookie = req?.headers.cookie || null

				const userResponse = await this.refresh()

				if (roles && !this.checkRole(roles, userResponse.data.roles)) {
					return null
				}

				const cartResponse = await cartService.getCartByToken()
				if (userResponse.headers["set-cookie"]) {
					const resCookie = cookie.parse(userResponse.headers["set-cookie"])

					resCookie.forEach(cookie => {
						const { name, value, maxAge } = cookie
						if (name === "refreshToken" || name === "accessToken") {
							setCookie(name, value, { req, res, httpOnly: true, maxAge })
						}
					})
				}

				return {
					user: userResponse.data,
					cart: cartResponse
				}
			} catch (error) {
				removeCookies("isAuth", { req, res })
				removeCookies("accessToken", { req, res })
				removeCookies("refreshToken", { req, res })
				return null
			}
		} else {
			return null
		}
	}
}

export const authService = new AuthService()
