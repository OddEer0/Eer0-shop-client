import { RenderOptions, render } from "@testing-library/react"
import React, { ReactElement } from "react"

import { AppProvider } from "@/app/providers"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	return <AppProvider>{children}</AppProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
	render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line import/export
export * from "@testing-library/react"

// eslint-disable-next-line import/export
export { customRender as render }
