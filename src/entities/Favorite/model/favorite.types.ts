import { IDevice } from "@/shared/api"

export interface FavoriteStoreState {
	devices: IDevice[]
	addDevice: (device: IDevice) => void
	removeDevice: (id: string) => void
}
