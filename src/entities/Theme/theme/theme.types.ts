import { IBaseBoxShadow } from "./base/boxShadow"
import { IBaseText } from "./base/text"
import { IUIBackground } from "./ui/background"
import { IUIBoxShadow } from "./ui/boxShadow"
import { IUIColor } from "./ui/color"
import { IUIRandomColor } from "./ui/randomColor"
import { IUIText } from "./ui/text"

export enum ThemeEnum {
	light = "light",
	dark = "dark"
}

interface IUI {
	color: IUIColor
	text: IUIText
	bg: IUIBackground
	boxShadow: IUIBoxShadow
	randomColor: IUIRandomColor
}

interface IBase {
	text: IBaseText
	bg: IUIBackground
	boxShadow: IBaseBoxShadow
}

export interface ITheme {
	ui: IUI
	base: IBase
}
