import Cookies from "js-cookie"
import { StateCreator } from "zustand"

import { ThemeStateTypes, ThemeTypes } from "./theme.types"

export const themeSlice: StateCreator<ThemeStateTypes> = set => ({
	theme: "dark",
	isInit: false,
	setTheme(themeValue: ThemeTypes) {
		Cookies.set("theme", themeValue)
		set({ theme: themeValue })
	},
	toggleTheme() {
		const themeCookie = Cookies.get("theme")
		if (themeCookie === "light") {
			Cookies.set("theme", "dark")
			set({ theme: "dark" })
		} else {
			Cookies.set("theme", "light")
			set({ theme: "light" })
		}
	}
})
