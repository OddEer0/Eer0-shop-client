import { useActions, useAppSelector } from "@/shared/hooks"

import { themeSelector } from "../model"
import { ThemeEnum } from "../theme/theme.types"

export const useTheme = () => {
	const { setTheme } = useActions()
	const { type } = useAppSelector(themeSelector)

	const toggleTheme = () => {
		if (type === ThemeEnum.dark) {
			setTheme("light")
		} else {
			setTheme("dark")
		}
	}

	return {
		toggleTheme,
		setTheme,
		themeName: type
	}
}
