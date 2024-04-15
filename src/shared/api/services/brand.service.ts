import { AxiosInstance } from "axios"

import { api } from "../instance"
import { IBrand } from "../types"

export class BrandService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getBrandsByCategoryId(id: string) {
		const { data } = await this.api.get<IBrand[]>(`brand/category/${id}`)
		return data
	}
}

export const brandService = new BrandService()
