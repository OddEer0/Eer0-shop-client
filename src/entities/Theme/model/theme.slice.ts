/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit"
import { DefaultTheme } from "styled-components"

import { darkTheme } from "../theme/darkTheme"
import { lightTheme } from "../theme/lightTheme"
import { ThemeEnum } from "../theme/theme.types"

interface InitialStateTypes {
	theme: DefaultTheme
}

const initialState: InitialStateTypes = {
	theme: lightTheme
}

const themeSlice = createSlice({
	name: "themeSlice",
	initialState,
	reducers: {
		toggleTheme(state) {
			state.theme = state.theme.type === ThemeEnum.light ? darkTheme : lightTheme
		}
	}
})

export const themeReducer = themeSlice.reducer

export const { toggleTheme } = themeSlice.actions
