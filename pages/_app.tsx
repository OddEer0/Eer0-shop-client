/* eslint-disable import/no-named-as-default-member */

/* eslint-disable no-restricted-imports */
import cookie from "cookie"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"

import { AppProvider } from "@/app/providers"
import { wrapper } from "@/app/store/store"
import { GlobalStyle } from "@/app/styles"

import { fetchTheme } from "@/entities/Theme"

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
			<AppProvider>
				<GlobalStyle />
				{getLayout(<Component {...props.pageProps} />)}
			</AppProvider>
		</Provider>
	)
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ ctx }) => {
	const { theme } = cookie.parse(ctx.req ? ctx.req.headers.cookie || "" : document.cookie)

	if (theme === "light") {
		await store.dispatch(fetchTheme("light"))
	} else {
		await store.dispatch(fetchTheme("dark"))
	}

	return {
		pageProps: {}
	}
})

export default MyApp
