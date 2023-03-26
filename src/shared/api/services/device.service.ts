import { ParsedUrlQuery } from "querystring"

import { api } from "../instance"
import { IDeviceAxiosResponse } from "../types"

export const deviceService = {
	api: api,
	async getFilteredAndSortedDevice(urlQuery: ParsedUrlQuery) {
		const response = await this.api.get<IDeviceAxiosResponse>("device", {
			params: { ...urlQuery, limit: 30, page: urlQuery.page ? urlQuery.page : "1" }
		})
		return response.data
	}
}
