import { FavoriteStoreState } from "./favorite.types"

export const favoriteActionSelector = ({ addDevice, removeDevice }: FavoriteStoreState) => ({
	addDevice,
	removeDevice
})

export const favoriteDeviceSelector = (state: FavoriteStoreState) => state.devices

export const isFavoriteDeviceSelector = (id: string) => (state: FavoriteStoreState) =>
	state.devices.some(device => device.id === id)
