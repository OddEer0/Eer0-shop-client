import { combineReducers } from "@reduxjs/toolkit"

import { userReducer } from "@/entities/User"

export const rootReducer = combineReducers({
	user: userReducer
})
