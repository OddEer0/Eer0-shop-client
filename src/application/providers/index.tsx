import { FC, PropsWithChildren } from "react"

import { Compose } from "@/shared/ui"

import { WithFeedbackProvider } from "./WithFeedbackProvider"
import { WithThemeProvider } from "./WithThemeProvider"

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Compose providers={[WithThemeProvider, WithFeedbackProvider]}>{children}</Compose>
}
