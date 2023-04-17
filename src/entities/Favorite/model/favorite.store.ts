import { useEffect, useState } from "react"

import { createPersistStore } from "@/shared/utils"

import { FavoriteStoreState } from "./favorite.types"

export const useFavoriteStore = createPersistStore<FavoriteStoreState>(
	set => ({
		devices: [],
		addDevice(device) {
			set(state => {
				state.devices.push(device)
			})
		},
		removeDevice(id) {
			set(state => {
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
