import { useContext } from "react"
import { useStore as useZustandStore } from "zustand"

import { ThemeStateTypes, themeSlice } from "@/entities/Theme"

import { createStore } from "@/shared/utils"

import { appStoreContext } from "./store.provider"

type AppStoreTypes = ThemeStateTypes

export const initializeStore = (preloadedState: Partial<AppStoreTypes> = {}) => {
	return createStore<AppStoreTypes>((...a) => ({
		...themeSlice(...a),
		...preloadedState
	}))
}

export const useAppStore = <T>(selector: (state: AppStoreTypes) => T) => {
	const store = useContext(appStoreContext)

	if (!store) throw new Error("Store is missing the provider")

	return useZustandStore(store, selector)
}
