import { DefaultTheme } from "styled-components"

import { theme } from "./theme"
import { ThemeEnum } from "./theme.types"

export const lightTheme: DefaultTheme = {
	...theme,
	type: ThemeEnum.light,
	ui: {
		...theme.ui,
		bg: {
			...theme.ui.bg
		},
		boxShadow: {
			...theme.ui.boxShadow
		},
		color: {
			...theme.ui.color
		},
		randomColor: {
			...theme.ui.randomColor
		},
		text: {
			...theme.ui.text
		}
	},
	base: {
		...theme.base,
		bg: {
			...theme.base.bg
		},
		boxShadow: {
			...theme.base.boxShadow
		},
		text: {
			...theme.base.text
		}
	}
}
