/* eslint-disable import/no-unresolved */

/* eslint-disable import/no-named-as-default-member */

/* eslint-disable no-restricted-imports */
import { Hydrate, QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { NextPage } from "next"
import type { AppContext, AppProps } from "next/app"
import { ReactElement, ReactNode, useState } from "react"
import "react-datepicker/dist/react-datepicker.css"
import "react-toastify/dist/ReactToastify.css"
import "simplebar-react/dist/simplebar.min.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import { AppProvider } from "@/app/providers"
import { GlobalStyle } from "@/app/styles"

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
				<AppProvider>
					<GlobalStyle />
					{getLayout(<Component {...pageProps} />)}
					<ReactQueryDevtools initialIsOpen={false} />
				</AppProvider>
			</Hydrate>
		</QueryClientProvider>
	)
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
	const { req } = ctx
	const queryClient = new QueryClient()

	if (!!req) {
		const response = await authService.refreshToken(ctx)

		queryClient.setQueryData(["profile"], response ? response.profile : null)
		queryClient.setQueryData(["cart"], response ? response.cart : null)
	}

	return {
		pageProps: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

export default MyApp
