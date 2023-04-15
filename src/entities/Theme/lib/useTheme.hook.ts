import { useEffect, useState } from "react"

import { useThemeStore } from "../model/theme.store"

export const useTheme = () => {
	const { setTheme: setThemeName, theme: themeName } = useThemeStore()
	const [theme, setTheme] = useState("dark")

	useEffect(() => {
		setTheme(themeName)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [themeName])

	const toggleTheme = () => {
		if (themeName === "dark") {
			setThemeName("light")
		} else {
			setThemeName("dark")
		}
	}

	return {
		toggleTheme,
		setTheme,
		theme
	}
}
