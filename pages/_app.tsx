import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import { wrapper } from "@/app/store/store"
import { GlobalStyle } from "@/app/styles"
// eslint-disable-next-line import/no-unresolved
import { theme } from "@/app/theme"

import { MainLayout } from "@/widgets/MainLayout"

const App = ({ Component, ...rest }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(rest)

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<MainLayout>
					<GlobalStyle />
					<Component {...props.pageProps} />
				</MainLayout>
			</ThemeProvider>
		</Provider>
	)
}

export default App
