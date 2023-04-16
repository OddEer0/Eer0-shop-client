import { api } from "../instance"
import { IAddToCart, ICart } from "../types"
import { IRemoveFromCart } from "../types/ICart"

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

	async addDeviceToCart(formData: IAddToCart) {
		const { data } = await this.api.post<ICart>("cart/device", formData)

		return data
	},

	async removeDeviceFromCart(formData: IRemoveFromCart) {
		const { data } = await this.api.post<ICart>("cart/device/remove", formData)

		return data
	}
}
