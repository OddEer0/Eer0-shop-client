import { FC, PropsWithChildren } from "react"

import { Compose } from "./Compose"
import { WithQueryClientProvider } from "./WithQueryClientProvider"
import { WithThemeProvider } from "./WithThemeProvider"

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Compose providers={[WithQueryClientProvider, WithThemeProvider]}>{children}</Compose>
}
