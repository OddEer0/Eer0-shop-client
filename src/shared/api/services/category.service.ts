import { api } from "../instance"
import { ICategory, ICategoryAxiosResponse } from "../types"

export const categoryService = {
	api: api,
	async getCategory() {
		const { data } = await this.api.get<ICategory[]>("category")
		return data
	},

	async getOneCategory(id: string) {
		const { data } = await this.api.get<ICategoryAxiosResponse>(`category/${id}`)
		return data
	}
}
