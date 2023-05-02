import { AxiosInstance } from "axios"
import { setCookie } from "cookies-next"
import { NextPageContext } from "next"

import { api } from "../instance"
import { IUser } from "../types"

import { cartService } from "./cart.service"

class AuthService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	async logout() {
		await this.api.post("auth/logout")
	}

	async refreshToken(ctx?: NextPageContext) {
		if (!!ctx) {
			const { req, res } = ctx

			try {
				api.defaults.headers.cookie = req?.headers.cookie as string

				const response = await this.api.get<IUser>("auth/refresh")
				const cartRes = await cartService.getCartByToken()

				if (response.headers["set-cookie"]) {
					const cookies = response.headers["set-cookie"]

					cookies.forEach((cookieStr: string) => {
						const [name, value] = cookieStr.split(";")[0].split("=")
						const maxAge = cookieStr.split(";")[1].split("=")[1]

						if (name === "refreshToken" || name === "accessToken") {
							setCookie(name, value, { res, req, httpOnly: true, maxAge: Number(maxAge) })
						}
					})
				}
				return {
					profile: response.data,
					cart: cartRes
				}
			} catch (error: unknown) {}
		}
	}
}

export const authService = new AuthService()
