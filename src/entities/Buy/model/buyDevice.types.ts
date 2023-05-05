import { ICart, IDeviceBuy } from "@/shared/api"

export interface BuyDeviceStoreTypes {
	device: IDeviceBuy[]
	method: Nullable<string>
	addDevice: (device: Nullable<IDeviceBuy>) => void
	setMethod: (method: string) => void
	addDevices: (device: Nullable<ICart[]>) => void
}
