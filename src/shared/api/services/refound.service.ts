import { AxiosInstance } from "axios"

import { api } from "../instance"
import { IRefound } from "../types"

class RefoundService {
	api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getRefound() {
		const { data } = await this.api.get<IRefound[]>("refounds")
		return data
	}
}

export const refoundService = new RefoundService()
