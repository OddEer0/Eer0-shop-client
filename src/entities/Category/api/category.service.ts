import { ICategory, fakeApi } from "@/shared/api"

export const categoryService = {
	api: fakeApi,
	async getCategory() {
		const { data } = await this.api.get<ICategory[]>("category")
		return data
	}
}
