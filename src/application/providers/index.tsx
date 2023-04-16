import { FC, PropsWithChildren } from "react"

import { Compose } from "@/shared/ui"

import { WithLazyMotionProvider } from "./WithLazyMotion"
import { WithThemeProvider } from "./WithThemeProvider"

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Compose providers={[WithThemeProvider, WithLazyMotionProvider]}>{children}</Compose>
}
