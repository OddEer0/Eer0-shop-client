import type { AppProps } from "next/app"
import { Provider } from "react-redux"

import { AppProvider } from "@/app/providers"
import { wrapper } from "@/app/store/store"
import { GlobalStyle } from "@/app/styles"

const App = ({ Component, ...rest }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(rest)

	return (
		<Provider store={store}>
			<AppProvider>
				<GlobalStyle />
				<Component {...props.pageProps} />
			</AppProvider>
		</Provider>
	)
}

export default App
