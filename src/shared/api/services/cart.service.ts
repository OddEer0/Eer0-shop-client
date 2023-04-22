import { api } from "../instance"
import { ICart, IPostCartAdd } from "../types"

export const cartService = {
	api: api,
	async getCartByUserId(id: string) {
		const { data } = await this.api.get<ICart>(`cart/${id}`)

		return data
	},

	async getCartByToken() {
		const { data } = await this.api.get<ICart>("cart/token/access")

		return data
	},

	async addDeviceToCart({ deviceId, userId }: IPostCartAdd) {
		const { data } = await this.api.post<ICart>(`cart/device/${userId}`, { deviceId })

		return data
	},

	async removeDeviceFromCart(id: string) {
		const { data } = await this.api.delete<ICart>(`cart/device/${id}`)

		return data
	}
}
