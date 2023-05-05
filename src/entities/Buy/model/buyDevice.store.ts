import { createStore } from "@/shared/utils"

import { BuyDeviceStoreTypes } from "./buyDevice.types"

export const useBuyDeviceStore = createStore<BuyDeviceStoreTypes>(set => ({
	device: [],
	method: null,
	addDevice(device) {
		set(state => {
			if (device) {
				state.device.push(device)
			}
		})
	},
	setMethod(method) {
		set(state => {
			state.method = method
		})
	}
}))
