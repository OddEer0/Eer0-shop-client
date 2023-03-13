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
			...theme.ui.color,
			default_40: "#3e3e3e32",
			primary_50: "#FA1F60",
			primary_60: "#e91c59",
			primary_70: "#db1953"
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
			primary_40: "#0E0D0D",
			primary_50: "#090606",
			primary_60: "#0E0D0D",
			tertiary_40: "#0E0D0D"
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
