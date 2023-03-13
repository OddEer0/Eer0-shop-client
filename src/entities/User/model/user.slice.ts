import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IUser } from "@/shared/api"

interface InitialStateTypes {
	user: Nullable<IUser>
}

const initialState: InitialStateTypes = {
	user: null
}

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setUser(state, { payload }: PayloadAction<IUser>) {
			state.user = payload
		},
		deleteUser(state) {
			state.user = null
		}
	}
})

export const userReducer = userSlice.reducer

export const { setUser, deleteUser } = userSlice.actions
