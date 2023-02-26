import { DefaultTheme } from "styled-components"

import { baseBackground } from "./base/background"
import { baseText } from "./base/text"
import { uiBackground } from "./ui/background"
import { uiBoxShadow } from "./ui/boxShadow"
import { uiColor } from "./ui/color"
import { uiRandomColor } from "./ui/randomColor"
import { uiText } from "./ui/text"

export const theme: DefaultTheme = {
	ui: {
		randomColor: uiRandomColor,
		bg: uiBackground,
		boxShadow: uiBoxShadow,
		text: uiText,
		color: uiColor
	},
	base: {
		text: baseText,
		bg: baseBackground
	}
}
