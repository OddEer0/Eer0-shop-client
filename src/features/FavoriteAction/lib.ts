import {
	favoriteActionSelector,
	isFavoriteDeviceSelector,
	useFavoritePersistStore,
	useFavoriteStore
} from "@/entities/Favorite"

import { IDevice } from "@/shared/api"

export const useToggleFavorite = (device: Nullable<IDevice>) => {
	const { addDevice, removeDevice } = useFavoriteStore(favoriteActionSelector)
	const isHaveCart = useFavoritePersistStore(isFavoriteDeviceSelector(device?.id || null), false)

	const addFavoriteHandler = () => {
		if (device) {
			addDevice(device)
		}
	}

	const removeFavoriteHandler = () => {
		if (device) {
			removeDevice(device.id)
		}
	}

	return {
		addFavoriteHandler,
		removeFavoriteHandler,
		isHaveCart
	}
}
