// /* eslint-disable no-console */
import axios from "axios"
import Cookies from "js-cookie"

import { queryClient } from "../config"

import { IUser } from "./types"

const API_URL = process.env.API_URL

export const api = axios.create({
	withCredentials: true,
	baseURL: API_URL
})

api.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (error.response?.status == 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true
			try {
				const user = await axios.get<IUser>(`${API_URL}/auth/refresh`, { withCredentials: true })
				queryClient.setQueriesData(["profile"], user.data)
				return api.request(originalRequest)
			} catch (e) {
				queryClient.setQueryData(["profile"], null)
				queryClient.setQueryData(["cart"], null)
				Cookies.set("isAuth", "true")
			}
		}
		throw error
	}
)
