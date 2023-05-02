import { FC, PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

import { darkTheme, lightTheme, themeSelector } from "@/entities/Theme"

import { useAppStore } from "../store"

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const { theme } = useAppStore(themeSelector)

	return <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>{children}</ThemeProvider>
}
