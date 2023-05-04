import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { FC, PropsWithChildren, useState } from "react"

import { queryClient } from "@/shared/configs"
import { useSsr } from "@/shared/hooks"

import { StoreProvider } from "../store"
import { GlobalStyle } from "../styles"

import { ComposeProvider } from "./Compose"

interface AppProviderProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	pageProps: any
}

export const AppProvider: FC<PropsWithChildren<AppProviderProps>> = ({ pageProps, children }) => {
	const { isServer } = useSsr()
	const [queryClientState] = useState(() => (isServer ? new QueryClient() : queryClient))

	return (
		<QueryClientProvider client={queryClientState}>
			<Hydrate state={pageProps.dehydratedState}>
				<StoreProvider {...pageProps.initZustandState}>
					<ReactQueryDevtools initialIsOpen={false} />
					<ComposeProvider>
						<GlobalStyle />
						{children}
					</ComposeProvider>
				</StoreProvider>
			</Hydrate>
		</QueryClientProvider>
	)
}
