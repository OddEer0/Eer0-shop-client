import { ICart } from "@/shared/api"

export const findDeviceQuerySelector = (id: string) => {
	return (state: Nullable<ICart>) => {
		if (state) {
			return state.devices.some(device => device.id === id)
		}
		return null
	}
}

export const cartDeviceQuerySelector = (state: Nullable<ICart>) => {
	if (state) {
		return state.devices
	}
	return null
}
