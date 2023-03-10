/* eslint-disable no-restricted-imports */
import { RenderOptions, render } from "@testing-library/react"
import React, { ReactElement } from "react"
import { Provider } from "react-redux"

import { AppProvider } from "@/app/providers"
import { makeStore } from "@/app/store/store"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	const store = makeStore()
	return (
		<Provider store={store}>
			<AppProvider>{children}</AppProvider>
		</Provider>
	)
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
	render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line import/export
export * from "@testing-library/react"

// eslint-disable-next-line import/export
export { customRender as render }
