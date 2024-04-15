export type ThemeTypes = "light" | "dark"

export interface ThemeStateTypes {
	theme: ThemeTypes
	isInit: boolean
	setTheme: (theme: ThemeTypes) => void
	toggleTheme: () => void
}
