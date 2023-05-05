import { IDevice } from "@/shared/api"

export interface BuyDeviceStoreTypes {
	device: IDevice[]
	method: Nullable<string>
	addDevice: (device: Nullable<IDevice>) => void
	setMethod: (method: string) => void
}
