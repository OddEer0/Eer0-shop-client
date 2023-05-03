import { FC, PropsWithChildren } from "react"

import { Header } from "../Header"

export const BuyLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}
