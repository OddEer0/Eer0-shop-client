/* eslint-disable import/no-unresolved */

/* eslint-disable import/no-named-as-default-member */

/* eslint-disable no-restricted-imports */
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

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
						<ReactQueryDevtools initialIsOpen={false} />
					</AppProvider>
				</Hydrate>
			</QueryClientProvider>
		</Provider>
	)
}

export default MyApp
