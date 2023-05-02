import { PropsWithChildren, createContext, useRef } from "react"

import { initializeStore } from "./store"

export const appStoreContext = createContext<AppStore | null>(null)

export const Provider = appStoreContext.Provider

export const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
	const storeRef = useRef<AppStore>()

	if (!storeRef.current) {
		storeRef.current = initializeStore(props)
	}

	return <Provider value={storeRef.current}>{children}</Provider>
}
