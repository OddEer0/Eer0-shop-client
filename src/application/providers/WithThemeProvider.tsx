import { FC, PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

import { darkTheme, lightTheme, useTheme } from "@/entities/Theme"

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const { theme } = useTheme()

	return <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>{children}</ThemeProvider>
}
