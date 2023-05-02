import { AxiosInstance } from "axios"

import { api } from "../instance"
import { ICart, IPostCartAdd, ISetCountCartDevice } from "../types"

export class CartService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getCartByUserId(id: string) {
		const { data } = await this.api.get<ICart>(`cart/${id}`)

		return data
	}

	async getCartByToken() {
		const { data } = await this.api.get<ICart>(`cart/token/access`)

		return data
	}

	async addDeviceToCart({ deviceId, userId }: IPostCartAdd) {
		const { data } = await this.api.post<ICart>(`cart/device/${userId}`, { deviceId })

		return data
	}

	async removeDeviceFromCart(id: string) {
		const { data } = await this.api.delete<ICart>(`cart/device/${id}`)

		return data
	}

	async setCountCartDevice(formData: ISetCountCartDevice) {
		const { data } = await this.api.post<ICart>(`cart/device/count/${formData.cartDeviceId}`, { count: formData.count })

		return data
	}
}

export const cartService = new CartService()
