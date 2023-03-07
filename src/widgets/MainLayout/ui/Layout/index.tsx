import { animate, motion, useMotionValue } from "framer-motion"
import { FC, PropsWithChildren } from "react"

import { Layout } from "@/shared/ui"

import { Aside } from "../Aside"
import { Header } from "../Header"

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const positionX = useMotionValue(0)

	const openHandler = () => {
		animate(positionX, 340)
	}

	const closeHandler = () => {
		animate(positionX, 0)
	}

	return (
		<Layout>
			<Layout.Aside as={Aside} style={{ x: positionX }} />
			<Layout.Content as={motion.div} style={{ x: positionX }}>
				<Layout>
					<Layout.Header as={Header} openHandler={openHandler} />
					<Layout.Content>{children}</Layout.Content>
					<Layout.Footer />
				</Layout>
			</Layout.Content>
		</Layout>
	)
}
