import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"
import { BsCart, BsCartCheckFill } from "react-icons/bs"

import {
	findDeviceQuerySelector,
	useAddDeviceToCartMutate,
	useCartQuery,
	useRemoveDeviceFromCartMutate
} from "@/entities/Cart"
import { useProfileQuery, userIdQuerySelector } from "@/entities/User"

import { toggleScaleAnimation } from "@/shared/animation"
import { Spinner } from "@/shared/ui"

import { $ToggleCartIcon } from "./ToggleCartIcon.styles"

interface ToggleCartIconProps {
	id: string
}

export const ToggleCartIcon: FC<ToggleCartIconProps> = ({ id }) => {
	const { data: isToCart, isFetching } = useCartQuery(findDeviceQuerySelector(id))
	const { mutate: addMutate, isLoading: isAddLoading } = useAddDeviceToCartMutate()
	const { mutate: removeMutate, isLoading } = useRemoveDeviceFromCartMutate()
	const { data: userId } = useProfileQuery(userIdQuerySelector)

	const removeDeviceFromCartHandler = () => {
		if (userId) {
			removeMutate(id)
		}
	}

	const addDeviceToCartHandler = () => {
		if (userId) {
			addMutate({ deviceId: id, userId })
		}
	}

	return (
		<$ToggleCartIcon>
			<AnimatePresence mode="wait">
				{isFetching || isLoading || isAddLoading ? (
					<motion.div key="load" variants={toggleScaleAnimation} exit="hidden" animate="show" initial="init">
						<Spinner size="xsmall" />
					</motion.div>
				) : isToCart ? (
					<motion.div
						onClick={removeDeviceFromCartHandler}
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
						onClick={addDeviceToCartHandler}
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
