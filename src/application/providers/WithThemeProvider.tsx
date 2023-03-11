import { FC, PropsWithChildren, useEffect } from "react"
import { ThemeProvider } from "styled-components"

import { themeSelector } from "@/entities/Theme"

import { useActions, useAppSelector } from "@/shared/hooks"

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const theme = useAppSelector(themeSelector)
	const { setTheme } = useActions()

	useEffect(() => {
		const theme = localStorage.getItem("theme")
		if (!theme) {
			localStorage.setItem("theme", "dark")
		} else if (theme === "light") {
			setTheme("light")
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
