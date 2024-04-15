import { baseBackground } from "./base/background"
import { baseBoxShadow } from "./base/boxShadow"
import { baseText } from "./base/text"
import { ITheme } from "./theme.types"
import { uiBackground } from "./ui/background"
import { uiBoxShadow } from "./ui/boxShadow"
import { uiColor } from "./ui/color"
import { uiRandomColor } from "./ui/randomColor"
import { uiText } from "./ui/text"

export const theme: ITheme = {
	ui: {
		randomColor: uiRandomColor,
		bg: uiBackground,
		boxShadow: uiBoxShadow,
		text: uiText,
		color: uiColor
	},
	base: {
		text: baseText,
		bg: baseBackground,
		boxShadow: baseBoxShadow
	}
}
