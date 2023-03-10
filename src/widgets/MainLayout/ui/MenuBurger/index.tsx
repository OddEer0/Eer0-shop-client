import { AnimatePresence, motion } from "framer-motion"
import { FC, useContext } from "react"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"

import { toggleScaleAnimation } from "@/shared/animation"
import { Overlay } from "@/shared/ui"

import { LayoutContext } from "../Layout"

import { $MenuBurgerWrapper } from "./MenuBurger.styles"

export const MenuBurger: FC = () => {
	const { isOpen, closeHandler, openHandler } = useContext(LayoutContext)

	return (
		<$MenuBurgerWrapper as={motion.div}>
			<AnimatePresence mode="wait">
				{!isOpen ? (
					<motion.div key="open" variants={toggleScaleAnimation} animate="show" exit="hidden" initial="init">
						<FiMenu onClick={openHandler} className="menu-icon" />
					</motion.div>
				) : (
					<motion.div key="close" variants={toggleScaleAnimation} animate="show" exit="hidden" initial="init">
						<IoClose onClick={closeHandler} className="menu-icon close" />
					</motion.div>
				)}
			</AnimatePresence>
			<Overlay
				onClick={closeHandler}
				animate={{ opacity: 1, x: 340 }}
				exit={{ opacity: 0, x: 0 }}
				isShow={isOpen}
				transition={{ duration: 0.35 }}
			/>
		</$MenuBurgerWrapper>
	)
}
