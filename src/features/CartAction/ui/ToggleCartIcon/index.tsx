import { AnimatePresence, motion } from "framer-motion"
import { FC, useState } from "react"
import { BsCart, BsCartCheckFill } from "react-icons/bs"

import { toggleScaleAnimation } from "@/shared/animation"

import { $ToggleCartIcon } from "./ToggleCartIcon.styles"

interface ToggleCartIconProps {
	id: string
}

export const ToggleCartIcon: FC<ToggleCartIconProps> = ({ id }) => {
	const [isToCart, setIsToCart] = useState(false)

	const toggleHandler = () => {
		setIsToCart(prev => !prev)
	}

	return (
		<$ToggleCartIcon>
			<AnimatePresence mode="wait">
				{isToCart ? (
					<motion.div
						onClick={toggleHandler}
						key="check"
						className="unchecked"
						variants={toggleScaleAnimation}
						exit="hidden"
						animate="show"
						initial="init"
					>
						<BsCartCheckFill />
					</motion.div>
				) : (
					<motion.div
						onClick={toggleHandler}
						key="uncheck"
						variants={toggleScaleAnimation}
						exit="hidden"
						animate="show"
						initial="init"
					>
						<BsCart />
					</motion.div>
				)}
			</AnimatePresence>
			<div className="`"></div>
		</$ToggleCartIcon>
	)
}
