interface IThemeUIColorNaming {
	default_10: string
	default_20: string
	default_30: string
	default_40: string
	default_50: string
	default_60: string
	default_70: string
	default_80: string
	default_90: string
	default_100: string
	primary_50: string
	primary_60: string
	primary_70: string
	secondary_50: string
	secondary_60: string
	secondary_70: string
	success_50: string
	success_60: string
	success_70: string
	danger_50: string
	danger_60: string
	danger_70: string
	warning_50: string
	warning_60: string
	warning_70: string
}

interface IThemeBaseColorNaming {
	primary_50: string
	primary_60: string
	primary_70: string
	secondary_50: string
	secondary_60: string
	secondary_70: string
	tertiary_50: string
	tertiary_60: string
	tertiary_70: string
	quaternary_50: string
	quaternary_60: string
	quaternary_70: string
}

interface IBoxShadow {
	primary: string
	secondary: string
	tertiary: string
	quaternary: string
}

interface IUIBackground {
	primary: string
	secondary: string
	tertiary: string
	quaternary: string
}

interface IUIRandomColor {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

interface IBase {
	text: IThemeBaseColorNaming
	bg: IThemeBaseColorNaming
	border: IThemeBaseColorNaming
	boxShadow: IBoxShadow
}

interface IUI {
	color: IThemeUIColorNaming
	text: IThemeUIColorNaming
	bg: IUIBackground
	boxShadow: IBoxShadow
	randomColor: IUIRandomColor
}

export interface ITheme {
	ui: IUI
	base: IBase
}
