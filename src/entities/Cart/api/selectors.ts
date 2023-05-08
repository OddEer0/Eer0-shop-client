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

export const cartLengthQuerySelector = (state: Nullable<ICart[]>) => state?.length || 0

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
	const percentStock = differenceNumberToPercent(price, total)

	return {
		price,
		stock: total,
		percentStock: isNaN(percentStock) ? 0 : percentStock.toFixed(1)
	}
}
