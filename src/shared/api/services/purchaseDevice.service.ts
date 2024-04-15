import { AxiosInstance } from "axios"

import { api } from "../instance"
import { IPurchaseDevice } from "../types"

class PurchaseDeviceService {
	api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getPurchaseDevice() {
		const { data } = await this.api.get<IPurchaseDevice[]>("purchase-device")
		return data
	}
}

export const purchaseDeviceService = new PurchaseDeviceService()
