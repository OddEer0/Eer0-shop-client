import { ICart } from "@/shared/api"
import { differenceNumberToPercent } from "@/shared/helpers"

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

export const getTotalCartPrice = (state: Nullable<ICart[]>) => {
	let price = 0
	let total = 0

	if (state) {
		state.forEach(device => {
			const stockOrPrice = device.device.stock ? device.device.stock : device.device.price
			price += device.device.price * device.count
			total += stockOrPrice * device.count
		})
	}

	return {
		price,
		stock: total,
		percentStock: differenceNumberToPercent(price, total).toFixed(1)
	}
}
