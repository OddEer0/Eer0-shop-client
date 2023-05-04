import { NextPage } from "next"
import type { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import "react-datepicker/dist/react-datepicker.css"
import "react-toastify/dist/ReactToastify.css"
import "simplebar-react/dist/simplebar.min.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

// eslint-disable-next-line no-restricted-imports
import { AppProvider } from "@/app/providers"

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? (page => page)

	return <AppProvider pageProps={pageProps}>{getLayout(<Component {...pageProps} />)}</AppProvider>
}

export default MyApp
