import { IDevice$Infos, IDeviceAxiosResponse } from "@/shared/api"

export const deviceQuerySelector = (data: IDeviceAxiosResponse) => data.devices

export const devicePageCountQuerySelector = (data: IDeviceAxiosResponse) => data.pageCount

export const deviceImageQuerySelector = (data: IDevice$Infos) => data.images

export const devicePriceQuerySelector = (data: IDevice$Infos) => ({
	price: data.price,
	stock: data.stock,
	stockPercent: data.stockPercent
})

export const deviceNameQuerySelector = (data: IDevice$Infos) => data.name
