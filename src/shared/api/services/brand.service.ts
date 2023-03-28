import { api } from "../instance"
import { IBrand } from "../types"

export const brandService = {
	api: api,
	async getBrandsByCategoryId(id: string) {
		const { data } = await this.api.get<IBrand[]>(`brand/category${id}`)
		return data
	}
}
