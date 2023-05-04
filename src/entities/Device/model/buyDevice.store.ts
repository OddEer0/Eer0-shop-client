import { createStore } from "@/shared/utils"

import { BuyDeviceStoreTypes } from "./buyDevice.types"

export const useBuyDeviceStore = createStore<BuyDeviceStoreTypes>(set => ({
	device: [],
	addDevice(device) {
		set(state => {
			state.device.push(device)
		})
	}
}))
