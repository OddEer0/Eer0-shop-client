import { api } from "../instance"
import { ICart } from "../types/ICart"

export const cartService = {
	api: api,
	async addDeviceToCart() {
		// const { data } = this.api.post()
	},

	async getCartByUserId(id: string) {
		const { data } = await this.api.get<ICart>(`cart/${id}`)

		return data
	},

	async getCartByToken() {
		const { data } = await this.api.get<ICart>("cart/token/access")

		return data
	}
}
