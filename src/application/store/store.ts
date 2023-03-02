import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"

import { rootReducer } from "./rootReducer"

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV === "development"
	})
}

export const wrapper = createWrapper<AppStore>(makeStore, { debug: Boolean(process.env.DEBUG) })
