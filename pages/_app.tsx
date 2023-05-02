/* eslint-disable import/no-unresolved */

/* eslint-disable import/no-named-as-default-member */

/* eslint-disable no-restricted-imports */
import { Hydrate, QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { getCookies, setCookie } from "cookies-next"
import { NextPage } from "next"
import type { AppContext, AppProps } from "next/app"
import { ReactElement, ReactNode, useState } from "react"
import "react-datepicker/dist/react-datepicker.css"
import "react-toastify/dist/ReactToastify.css"
import "simplebar-react/dist/simplebar.min.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import { AppProvider } from "@/app/providers"
import { StoreProvider, initializeStore } from "@/app/store"
import { GlobalStyle } from "@/app/styles"

import { ThemeTypes } from "@/entities/Theme/model/theme.types"

import { authService } from "@/shared/api"
import { queryClient } from "@/shared/config"

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? (page => page)
	const [queryClientState] = useState(() => queryClient)

	return (
		<QueryClientProvider client={queryClientState}>
			<Hydrate state={pageProps.dehydratedState}>
				<Hydrate state={pageProps.dehydratedInitState}>
					<StoreProvider {...pageProps.initZustandState}>
						<AppProvider>
							<GlobalStyle />
							{getLayout(<Component {...pageProps} />)}
							<ReactQueryDevtools initialIsOpen={false} />
						</AppProvider>
					</StoreProvider>
				</Hydrate>
			</Hydrate>
		</QueryClientProvider>
	)
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
	const { req, res } = ctx
	const queryClient = new QueryClient()
	const cookies = getCookies({ req, res })

	if (!!req) {
		if (cookies.refreshToken) {
			const response = await authService.refreshToken(ctx)

			queryClient.setQueryData(["profile"], response ? response.profile : null)
			queryClient.setQueryData(["cart"], response ? response.cart : null)
		} else {
			queryClient.setQueryData(["profile"], null)
			queryClient.setQueryData(["cart"], null)
		}
	}

	let theme: ThemeTypes = "dark"
	if (cookies.theme === "light") {
		theme = "light"
	} else {
		setCookie("theme", "dark")
	}
	const store = initializeStore({ theme })

	return {
		pageProps: {
			dehydratedInitState: dehydrate(queryClient),
			initZustandState: JSON.parse(JSON.stringify(store.getState()))
		}
	}
}

export default MyApp
