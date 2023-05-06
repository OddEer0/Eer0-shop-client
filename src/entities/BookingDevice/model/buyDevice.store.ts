import { createStore } from "@/shared/utils"

import { BuyDeviceStoreTypes } from "./buyDevice.types"

export const useBuyDeviceStore = createStore<BuyDeviceStoreTypes>(set => ({
	device: [],
	method: null,
	addDevice(device) {
		set(state => {
			if (device) {
				state.device = [device]
			}
		})
	},
	setMethod(method) {
		set(state => {
			state.method = method
		})
	},
	addDevices(devices) {
		set(state => {
			if (devices) {
				state.device = devices.map(device => ({ count: device.count, device: device.device }))
			}
		})
	}
}))
