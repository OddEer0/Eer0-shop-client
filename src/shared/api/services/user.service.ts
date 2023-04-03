import { api } from "../instance"
import { IUser } from "../types"

export const userService = {
	api: api,
	async getProfile() {
		const { data } = await this.api.get<IUser>("auth/refresh")
		return data
	},

	async getUserProfile(id: string) {
		const { data } = await this.api.get<IUser>(`users/${id}`)
		return data
	}
}
