import "styled-components"

import { ITheme, ThemeEnum } from "./theme/theme.types"

declare module "styled-components" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends ITheme {
		type: ThemeEnum
	}
}
