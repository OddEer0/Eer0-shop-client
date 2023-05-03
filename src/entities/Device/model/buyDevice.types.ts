import { IDevice } from "@/shared/api"

export interface BuyDeviceStoreTypes {
	device: IDevice[]
	addDevice: (device: IDevice) => void
}
