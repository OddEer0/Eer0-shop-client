import { animate, motion, useMotionValue } from "framer-motion"
import { FC, PropsWithChildren } from "react"

import { Aside } from "../Aside"
import { Header } from "../Header"

import { LayoutProvider } from "./LayoutProvider"

export { LayoutContext } from "./LayoutProvider"

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const x = useMotionValue(0)
	const opacity = useMotionValue(0)
	const zIndex = useMotionValue(-1)

	const openHandle = () => {
		animate(x, 340, { duration: 0.35, type: "tween" })
		animate(opacity, 1, { duration: 0.35, type: "tween" })
		animate(zIndex, 1000, { duration: 0.35, type: "tween" })
	}

	const closeHandle = () => {
		animate(x, 0, { duration: 0.35, type: "tween" })
		animate(opacity, 0, { duration: 0.35, type: "tween" })
		animate(zIndex, -1, { duration: 0.35, type: "tween" })
	}

	return (
		<LayoutProvider closeHandle={closeHandle} openHandle={openHandle}>
			<Aside style={{ x }}></Aside>
			<motion.div style={{ x }}>
				<Header />
				<motion.main>{children}</motion.main>
			</motion.div>
		</LayoutProvider>
	)
}
