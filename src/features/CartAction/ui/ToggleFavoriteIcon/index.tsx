import { AnimatePresence, motion } from "framer-motion"
import { FC, useState } from "react"
import { BsCart, BsCartCheckFill, BsHeart, BsHeartFill } from "react-icons/bs"

import { toggleScaleAnimation } from "@/shared/animation"

import { $ToggleFavoriteIcon } from "./ToggleFavoriteIcon.styles"

interface ToggleCartIconProps {
	id: string
}

export const ToggleFavoriteIcon: FC<ToggleCartIconProps> = ({ id }) => {
	const [isToCart, setIsToCart] = useState(false)

	const toggleHandler = () => {
		setIsToCart(prev => !prev)
	}

	return (
		<$ToggleFavoriteIcon>
			<AnimatePresence mode="wait">
				{isToCart ? (
					<motion.div
						onClick={toggleHandler}
						key="check"
						className="checked"
						variants={toggleScaleAnimation}
						exit="hidden"
						animate="show"
						initial="init"
					>
						<BsHeartFill />
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
						<BsHeart />
					</motion.div>
				)}
			</AnimatePresence>
			<div className="`"></div>
		</$ToggleFavoriteIcon>
	)
}
