import { FC, PropsWithChildren } from "react"

import { Layout } from "@/shared/ui"

import { Header } from "../Header"

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Layout>
				<Layout.Header as={Header}></Layout.Header>
				<Layout.Content>{children}</Layout.Content>
				<Layout.Footer></Layout.Footer>
			</Layout>
		</>
	)
}
