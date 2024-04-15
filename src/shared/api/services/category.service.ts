import { AxiosInstance } from "axios"

import { api } from "../instance"
import { ICategory } from "../types"

export class CategoryService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getCategory() {
		const { data } = await this.api.get<ICategory[]>("category")
		return data
	}

	async getOneCategory(id: string) {
		const { data } = await this.api.get<ICategory>(`category/${id}`)
		return data
	}
}

export const categoryService = new CategoryService()
