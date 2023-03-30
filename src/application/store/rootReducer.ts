import { combineReducers } from "@reduxjs/toolkit"

import { themeReducer } from "@/entities/Theme"

export const rootReducer = combineReducers({
	theme: themeReducer
})
