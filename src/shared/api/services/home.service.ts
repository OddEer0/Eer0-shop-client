import { AxiosInstance } from "axios"

import { api } from "../instance"
import { IHomeSlider } from "../types"

class HomeService {
	api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getHomeSlider() {
		const { data } = await this.api.get<IHomeSlider[]>("home-slider")
		return data
	}
}

export const homeService = new HomeService()
