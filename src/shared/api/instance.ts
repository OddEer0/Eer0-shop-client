// /* eslint-disable no-console */
import axios from "axios"

import { queryClient } from "../config"

import { IUser } from "./types"

const API_URL = process.env.API_URL

const FAKE_API_URL = process.env.FAKE_API_URL

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
				if (typeof window !== "undefined") {
					localStorage.setItem("isAuth", "true")
				}
				return api.request(originalRequest)
			} catch (e) {
				if (typeof window !== "undefined") {
					localStorage.removeItem("isAuth")
				}
				queryClient.setQueryData(["profile"], null)
			}
		}
		throw error
	}
)

export const fakeApi = axios.create({
	baseURL: FAKE_API_URL
})
