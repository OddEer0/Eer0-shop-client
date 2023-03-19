import { ParsedUrlQuery } from "querystring"

import { fakeApi } from "../instance"
import { IDeviceAxiosResponse } from "../types"

export const deviceService = {
	api: fakeApi,
	async getDevicesByCategory(urlQuery: ParsedUrlQuery) {
		const response = await this.api.get<IDeviceAxiosResponse>(`category/1`, {
			params: { ...urlQuery }
		})
		return response.data
	}
}
