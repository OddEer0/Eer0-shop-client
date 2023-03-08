import { FC, PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

import { themeSelector } from "@/entities/Theme"

import { useAppSelector } from "@/shared/hooks"

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const theme = useAppSelector(themeSelector)

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
