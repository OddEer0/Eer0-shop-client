import { FC, PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

import { theme } from "../theme"

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
