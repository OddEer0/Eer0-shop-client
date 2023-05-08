import { differenceNumberToPercent } from "@/shared/helpers"

import { BuyDeviceStoreTypes } from "./buyDevice.types"

export const buyPriceSelector = ({ device }: BuyDeviceStoreTypes) => {
	const price = device.reduce((acc, $device) => acc + $device.device.price * $device.count, 0)
	const total = device.reduce(
		(acc, $device) => acc + ($device.device.stock ? $device.device.stock : $device.device.price) * $device.count,
		0
	)
	const stockPercent = differenceNumberToPercent(price, total)
	const stockDiff = price - total

	return {
		price,
		total,
		stockPercent: isNaN(stockPercent) ? 0 : stockPercent.toFixed(1),
		stockDiff
	}
}

export const buyActionSelector = ({ setMethod, addDevice }: BuyDeviceStoreTypes) => {
	return {
		addDevice,
		setMethod
	}
}

export const buyMethodSelector = ({ setMethod, method }: BuyDeviceStoreTypes) => {
	return {
		setMethod,
		method
	}
}

export const buyDeviceSelector = (state: BuyDeviceStoreTypes) => state.device
