import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"
import { BsHeart, BsHeartFill } from "react-icons/bs"

import {
	favoriteActionSelector,
	isFavoriteDeviceSelector,
	useFavoritePersistStore,
	useFavoriteStore
} from "@/entities/Favorite"

import { toggleScaleAnimation } from "@/shared/animation"
import { IDevice } from "@/shared/api"

import { $ToggleFavoriteIcon } from "./ToggleFavoriteIcon.styles"

interface ToggleCartIconProps {
	device: IDevice
}

export const ToggleFavoriteIcon: FC<ToggleCartIconProps> = ({ device }) => {
	const { addDevice, removeDevice } = useFavoriteStore(favoriteActionSelector)
	const isHaveCart = useFavoritePersistStore(isFavoriteDeviceSelector(device.id), false)

	const addFavoriteHandler = () => {
		addDevice(device)
	}

	const removeFavoriteHandler = () => {
		removeDevice(device.id)
	}

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
