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
	},

	async updateUser(dto: IUser) {
		const { data } = await this.api.put<IUser>(`users/${dto.id}`, dto)
		return data
	},

	async updateUserAvatar(id: string, image: Blob) {
		const formData = new FormData()
		formData.append("image", image)
		const { data } = await this.api.put<IUser>(`users/avatar/${id}`, formData)
		return data
	}
}
