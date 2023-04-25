import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"
import { BsHeart, BsHeartFill } from "react-icons/bs"

import { toggleScaleAnimation } from "@/shared/animation"
import { IDevice } from "@/shared/api"

import { useToggleFavorite } from "../../lib"

import { $ToggleFavoriteIcon } from "./ToggleFavoriteIcon.styles"

interface ToggleCartIconProps {
	device: IDevice
}

export const ToggleFavoriteIcon: FC<ToggleCartIconProps> = ({ device }) => {
	const { isHaveCart, addFavoriteHandler, removeFavoriteHandler } = useToggleFavorite(device)

	return (
		<$ToggleFavoriteIcon>
			<AnimatePresence mode="wait">
				{isHaveCart ? (
					<motion.div
						onClick={removeFavoriteHandler}
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
						onClick={addFavoriteHandler}
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
