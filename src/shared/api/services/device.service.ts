import { ParsedUrlQuery } from "querystring"

import { api } from "../instance"
import { IDevice, IDeviceAxiosResponse } from "../types"

export const deviceService = {
	api: api,
	async getFilteredAndSortedDevice(urlQuery: ParsedUrlQuery) {
		const { data } = await this.api.get<IDeviceAxiosResponse>("device", {
			params: { ...urlQuery, limit: 40, page: urlQuery.page ? urlQuery.page : "1" }
		})
		return data
	},

	async getOneDevice(id: string) {
		const { data } = await this.api.get<IDevice>(`device/${id}`)
		return data
	}
}
