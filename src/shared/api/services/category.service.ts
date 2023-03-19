import { fakeApi } from "../instance"
import { ICategory } from "../types"

export const categoryService = {
	api: fakeApi,
	async getCategory() {
		const { data } = await this.api.get<ICategory[]>("category")
		return data
	}
}
