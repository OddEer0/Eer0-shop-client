import { animate, motion, useMotionValue } from "framer-motion"
import { FC, PropsWithChildren } from "react"

import { Aside } from "../Aside"
import { Header } from "../Header"

import { $LayoutWrapper, $Overlay } from "./Layout.styles"

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const x = useMotionValue(0)
	const opacity = useMotionValue(0)
	const visibility = useMotionValue(-1)

	const openHandler = () => {
		animate(x, 340)
		animate(opacity, 1)
		animate(visibility, 1000)
	}

	const closeHandler = () => {
		animate(x, 0)
		animate(opacity, 0)
		animate(visibility, -1)
	}

	return (
		<>
			<Aside></Aside>
			<$LayoutWrapper as={motion.div} style={{ x }}>
				<Header openHandler={openHandler} />
				<motion.main>{children}</motion.main>
			</$LayoutWrapper>
			<$Overlay onClick={closeHandler} as={motion.div} style={{ x, opacity, zIndex: visibility }} />
		</>
	)
}
