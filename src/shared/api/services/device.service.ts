import { AxiosInstance } from "axios"
import { ParsedUrlQuery } from "querystring"

import { api } from "../instance"
import { IDevice$Infos, IDeviceAxiosResponse } from "../types"

export class DeviceService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getFilteredAndSortedDevice(urlQuery: ParsedUrlQuery) {
		const { data } = await this.api.get<IDeviceAxiosResponse>("device", {
			params: { ...urlQuery, limit: 40, page: urlQuery.page ? urlQuery.page : "1" }
		})
		return data
	}

	async getOneDevice(id: string) {
		const { data } = await this.api.get<IDevice$Infos>(`device/${id}`)
		return data
	}
}

export const deviceService = new DeviceService()
