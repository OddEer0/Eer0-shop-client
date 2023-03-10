import { configureStore } from "@reduxjs/toolkit"
import { MakeStore, createWrapper } from "next-redux-wrapper"

import { rootReducer } from "./rootReducer"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makeStore: MakeStore<any> = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV === "development"
	})
}

export const wrapper = createWrapper<AppStore>(makeStore, { debug: Boolean(process.env.DEBUG) })
