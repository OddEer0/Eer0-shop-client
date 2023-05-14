import { AxiosInstance } from "axios"
import { ParsedUrlQuery } from "querystring"

import { api } from "../instance"
import { IBuyDevicePost, IDevice, IDevice$Infos, IDeviceAxiosResponse } from "../types"

export class DeviceService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getFilteredAndSortedDevice(urlQuery: ParsedUrlQuery) {
		const { data } = await this.api.get<IDeviceAxiosResponse>("device/filtered", {
			params: { ...urlQuery, limit: 40, page: urlQuery.page ? urlQuery.page : "1" }
		})
		return data
	}

	async getNewDevices() {
		const { data } = await this.api.get<IDevice[]>("device", {
			params: {
				limit: 8
			}
		})
		return data
	}

	async getDeviceByInfo<T = IDevice[]>(info: string, limit = 8) {
		const { data } = await this.api.get<T>("device", {
			params: {
				limit,
				info
			}
		})

		return data
	}

	async getOneDevice(id: string) {
		const { data } = await this.api.get<IDevice$Infos>(`device/${id}`)
		return data
	}

	async buyDevices(devices: IBuyDevicePost[]) {
		const { data } = await this.api.post("device/buy-many", devices)
		return data
	}
}

export const deviceService = new DeviceService()
