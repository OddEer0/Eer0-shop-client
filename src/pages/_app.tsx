import type { AppProps } from "next/app"
import { Provider } from "react-redux"

import { wrapper } from "@/app/store/store"
// eslint-disable-next-line import/no-unresolved
import "@/app/styles/index.scss"

const App = ({ Component, ...rest }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(rest)

	return (
		<Provider store={store}>
			<Component {...props.pageProps} />
		</Provider>
	)
}

export default App
