import { AxiosInstance } from "axios"

import { api } from "../instance"
import { IFilter, IFilter$Infos } from "../types"

export class FilterService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getFiltersByCategoryId(id: string) {
		const { data } = await this.api.get<IFilter$Infos[]>(`filter/category/${id}`)
		return data
	}

	async getOneFilter(id: string) {
		const { data } = await this.api.get<IFilter>(`filter/${id}`)
		return data
	}
}

export const filterService = new FilterService()
