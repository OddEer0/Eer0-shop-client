import Cookies from "js-cookie"
import { useEffect } from "react"

// eslint-disable-next-line no-restricted-imports
import { useAppStore } from "@/app/store"

import { themeSelector } from "./model"

export const useTheme = () => {
	const { isInit, setTheme, theme, toggle } = useAppStore(themeSelector)

	useEffect(() => {
		if (!isInit) {
			const thm = Cookies.get("theme")
			if (thm === "light") {
				setTheme("light")
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return {
		theme,
		toggle,
		setTheme
	}
}
