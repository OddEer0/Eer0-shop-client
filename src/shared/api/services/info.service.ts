import { AxiosInstance } from "axios"

import { api } from "../instance"
import { IInfo } from "../types"

export class InfoService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getByDeviceId(id: string, limit: number | "all" = 10, sortBy = "order", order = "asc") {
		const { data } = await this.api.get<IInfo[]>(`/info/device/${id}`, {
			params: {
				limit: typeof limit === "number" ? limit : 10,
				sortBy,
				order,
				all: typeof limit === "number" ? undefined : "yes"
			}
		})
		return data
	}
}

export const infoService = new InfoService()
