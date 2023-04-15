export type ThemeTypes = "light" | "dark"

export interface ThemeStateTypes {
	theme: ThemeTypes
	setTheme: (theme: ThemeTypes) => void
}
