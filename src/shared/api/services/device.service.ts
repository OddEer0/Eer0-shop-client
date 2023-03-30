import { ParsedUrlQuery } from "querystring"

import { api } from "../instance"
import { IDeviceAxiosResponse, IDeviceWithInfoAndBrand } from "../types"

export const deviceService = {
	api: api,
	async getFilteredAndSortedDevice(urlQuery: ParsedUrlQuery) {
		const { data } = await this.api.get<IDeviceAxiosResponse>("device", {
			params: { ...urlQuery, limit: 30, page: urlQuery.page ? urlQuery.page : "1" }
		})
		return data
	},

	async getOneDevice(id: string) {
		const { data } = await this.api.get<IDeviceWithInfoAndBrand>(`device/${id}`)
		return data
	}
}
