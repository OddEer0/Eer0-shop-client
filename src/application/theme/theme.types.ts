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

interface IUI {
	color: IThemeUIColorNaming
	text: IThemeUIColorNaming
}

export interface ITheme {
	ui: IUI
}
