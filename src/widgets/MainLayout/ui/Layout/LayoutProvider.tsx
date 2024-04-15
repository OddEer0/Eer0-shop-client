import { FC, PropsWithChildren, createContext, useState } from "react"

interface LayoutProviderType {
	isOpen: boolean
	openHandler: () => void
	closeHandler: () => void
}

export const LayoutContext = createContext<LayoutProviderType>({
	isOpen: false,
	openHandler() {
		return null
	},
	closeHandler() {
		return null
	}
})

interface LayoutProviderProps {
	closeHandle: () => void
	openHandle: () => void
}

export const LayoutProvider: FC<PropsWithChildren<LayoutProviderProps>> = ({ openHandle, closeHandle, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const openHandler = () => {
		setIsOpen(true)
		openHandle()
	}

	const closeHandler = () => {
		setIsOpen(false)
		closeHandle()
	}

	return <LayoutContext.Provider value={{ isOpen, openHandler, closeHandler }}>{children}</LayoutContext.Provider>
}
