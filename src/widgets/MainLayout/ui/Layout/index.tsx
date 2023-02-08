/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head"
import { FC, PropsWithChildren } from "react"

import { Header } from "../Header"

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Header />
			<main>{children}</main>
		</>
	)
}
