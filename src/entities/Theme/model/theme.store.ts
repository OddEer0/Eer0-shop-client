import { createPersistStore } from "@/shared/utils"

import { ThemeStateTypes, ThemeTypes } from "./theme.types"

export const useThemeStore = createPersistStore<ThemeStateTypes>(
	set => ({
		theme: "dark",
		setTheme(theme: ThemeTypes) {
			set(state => {
				state.theme = theme
			})
		}
	}),
	{ name: "themeStore", version: 1 }
)
