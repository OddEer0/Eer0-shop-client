import { combineReducers } from "@reduxjs/toolkit"

import { themeReducer } from "@/entities/Theme"
import { userReducer } from "@/entities/User"

export const rootReducer = combineReducers({
	user: userReducer,
	theme: themeReducer
})
