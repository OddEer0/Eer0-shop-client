/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import { HYDRATE } from "next-redux-wrapper"
import { DefaultTheme } from "styled-components"

import { darkTheme } from "../theme/darkTheme"
import { lightTheme } from "../theme/lightTheme"
import { ThemeEnum } from "../theme/theme.types"

interface InitialStateTypes {
	theme: DefaultTheme
}

const initialState: InitialStateTypes = {
	theme: darkTheme
}

export const themeSlice = createSlice({
	name: "themeSlice",
	initialState,
	reducers: {
		toggleTheme(state) {
			state.theme = state.theme.type === ThemeEnum.light ? darkTheme : lightTheme
		},
		setTheme(state, action: PayloadAction<"dark" | "light">) {
			if (action.payload === "light") {
				state.theme = lightTheme
				Cookies.set("theme", "light")
			} else {
				state.theme = darkTheme
				Cookies.set("theme", "dark")
			}
		}
	},
	extraReducers(builder) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		builder.addCase(HYDRATE, (state, action: any) => {
			return {
				...state,
				...action.payload.theme
			}
		})
	}
})

export const themeReducer = themeSlice.reducer

export const { toggleTheme, setTheme } = themeSlice.actions
