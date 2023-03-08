import { DefaultTheme } from "styled-components"

import { theme } from "./theme"
import { ThemeEnum } from "./theme.types"

export const darkTheme: DefaultTheme = {
	...theme,
	type: ThemeEnum.dark,
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
			...theme.base.bg,
			primary_50: "#000000"
		},
		boxShadow: {
			...theme.base.boxShadow
		},
		text: {
			...theme.base.text,
			primary_50: "#ffffff"
		}
	}
}
