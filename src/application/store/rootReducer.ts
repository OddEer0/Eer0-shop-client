import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

import { IUser } from "@/shared/api"

interface InitialStateTypes {
	user: Nullable<IUser>
}

const initialState: InitialStateTypes = {
	user: null
}

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setUser(state, { payload }: PayloadAction<IUser>) {
			state.user = payload
		},
		deleteUser(state) {
			state.user = null
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.user
			}
		}
	}
})

export const userReducer = userSlice.reducer

export const { setUser, deleteUser } = userSlice.actions

export const rootReducer = combineReducers({
	user: userReducer
})
