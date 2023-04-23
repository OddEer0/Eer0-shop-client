import { api } from "../instance"
import { IFilter, IFilter$Infos } from "../types"

export const filterService = {
	api: api,
	async getFiltersByCategoryId(id: string) {
		const { data } = await this.api.get<IFilter$Infos[]>(`filter/category/${id}`)
		return data
	},

	async getOneFilter(id: string) {
		const { data } = await this.api.get<IFilter>(`filter/${id}`)
		return data
	}
}
