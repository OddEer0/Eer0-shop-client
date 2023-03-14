/* eslint-disable import/no-named-as-default-member */

/* eslint-disable no-restricted-imports */
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"

import { AppProvider } from "@/app/providers"
import { wrapper } from "@/app/store/store"
import { GlobalStyle } from "@/app/styles"

import { queryClient } from "@/shared/config"

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const MyApp = ({ Component, ...rest }: AppPropsWithLayout) => {
	const { store, props } = wrapper.useWrappedStore(rest)
	const getLayout = Component.getLayout ?? (page => page)

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={rest.pageProps.dehydratedState}>
					<AppProvider>
						<GlobalStyle />
						{getLayout(<Component {...props.pageProps} />)}
					</AppProvider>
				</Hydrate>
			</QueryClientProvider>
		</Provider>
	)
}

export default MyApp
