import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import { createPersistStore } from "@/shared/utils"

import { ADD_DEVICE_TO_FAVORITE, REMOVE_DEVICE_FROM_FAVORITE } from "../lib"

import { FavoriteStoreState } from "./favorite.types"

export const useFavoriteStore = createPersistStore<FavoriteStoreState>(
	set => ({
		devices: [],
		addDevice(device) {
			set(state => {
				toast.success(ADD_DEVICE_TO_FAVORITE)
				state.devices.push(device)
			})
		},
		removeDevice(id) {
			set(state => {
				toast.warning(REMOVE_DEVICE_FROM_FAVORITE)
				state.devices = state.devices.filter(device => device.id !== id)
			})
		}
	}),
	{ version: 1, name: "favoriteStore" }
)

export const useFavoritePersistStore = <T>(callback: (state: FavoriteStoreState) => T, initialState: Nullable<T>) => {
	const [state, setState] = useState<Nullable<T>>(initialState)
	const store = useFavoriteStore(callback)

	useEffect(() => {
		setState(store)
	}, [store])

	return state
}
