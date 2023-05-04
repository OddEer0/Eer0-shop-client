/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable no-restricted-imports */
import { RenderOptions, render } from "@testing-library/react"
import React, { ReactElement } from "react"

import { ComposeProvider } from "@/app/providers/Compose"
import { StoreProvider } from "@/app/store"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div id="myportal"></div>
			<StoreProvider>
				<ComposeProvider>{children}</ComposeProvider>
			</StoreProvider>
		</>
	)
}

const noop = () => {}
Object.defineProperty(window, "scrollTo", { value: noop, writable: true })

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
	render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line import/export
export * from "@testing-library/react"

// eslint-disable-next-line import/export
export { customRender as render }
