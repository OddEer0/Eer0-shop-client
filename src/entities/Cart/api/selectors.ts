import { ICart } from "@/shared/api"

export const findDeviceQuerySelector = (id: string) => {
	return (state: Nullable<ICart[]>) => {
		if (state) {
			return state.some(cartDevice => cartDevice.device.id === id)
		}
		return null
	}
}

export const getCartDeviceQuerySelectorWithIdCount = (id: string) => {
	return (state: Nullable<ICart[]>) => {
		if (state) {
			const device = state.find(device => device.device.id === id)
			if (!device) return null
			return {
				id: device.id,
				count: device.count,
				maxValue: device.device.count
			}
		}
		return null
	}
}
