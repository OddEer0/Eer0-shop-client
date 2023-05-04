import { configureStore } from "@reduxjs/toolkit"
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper"
import { createWrapper } from "next-redux-wrapper"
import { useContext } from "react"
import { useStore as useZustandStore } from "zustand"

import { ThemeStateTypes, themeSlice } from "@/entities/Theme"

import { IUser } from "@/shared/api"
import { createStore } from "@/shared/utils"

import { rootReducer, setUser, userSlice } from "./rootReducer"
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makeStore = wrapMakeStore(() => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().prepend(
				nextReduxCookieMiddleware({
					subtrees: [
						`user.user`,
						{
							subtree: `user.user`,
							cookieName: "NEXT_LOCALE",
							serializationFunction: String,
							deserializationFunction: String,
							defaultState: userSlice.getInitialState().user
						}
					]
				})
			),
		devTools: process.env.NODE_ENV === "development"
	})
})

export const wrapper = createWrapper<AppStoreType>(makeStore, { debug: false })

export const addUserEx =
	(user: IUser): AppThunk =>
	async dispatch => {
		dispatch(setUser(user))
	}
