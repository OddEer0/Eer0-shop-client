import { AxiosInstance } from "axios"

import { api } from "../instance"
import { IBookingDevice } from "../types"

class BookingDevicesService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getBookingDevices() {
		const { data } = await this.api.get<IBookingDevice[]>("booking-device")
		return data
	}

	async approve(id: string) {
		const { data } = await this.api.post(`booking-device/approve/${id}`)
		return data
	}

	async refound(id: string) {
		const { data } = await this.api.post(`booking-device/refound/${id}`)
		return data
	}
}

export const bookingDevicesService = new BookingDevicesService()
