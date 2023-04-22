import { api } from "../instance"

export const authService = {
	api: api,
	async logout() {
		await this.api.post("auth/logout")
	}
}
