import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"
import { BsCart } from "react-icons/bs"

import { findDeviceQuerySelector, useCartQuery } from "@/entities/Cart"
import { useProfileQuery, userIdQuerySelector } from "@/entities/User"

import { toggleScaleAnimation } from "@/shared/animation"
import { Spinner } from "@/shared/ui"

import { useAddDeviceToCartMutate } from "../../api"
import { CartDeviceCounter } from "../CartDeviceCounter"

import { $AddDeviceToCart } from "./AddDeviceToCartIcon.styles"

interface AddDeviceToCartIcon {
	id: string
}

export const AddDeviceToCartIcon: FC<AddDeviceToCartIcon> = ({ id }) => {
	const { data: isToCart, isFetching } = useCartQuery(findDeviceQuerySelector(id))
	const { mutate: addMutate, isLoading: isAddLoading } = useAddDeviceToCartMutate()
	const { data: userId } = useProfileQuery(userIdQuerySelector)

	const addDeviceToCartHandler = () => {
		if (userId) {
			addMutate({ deviceId: id, userId })
		}
	}

	return (
		<$AddDeviceToCart>
			<AnimatePresence mode="wait">
				{isFetching || isAddLoading ? (
					<motion.div key="load" variants={toggleScaleAnimation} exit="hidden" animate="show" initial="init">
						<Spinner size="xsmall" />
					</motion.div>
				) : isToCart ? (
					<CartDeviceCounter id={id} />
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
		</$AddDeviceToCart>
	)
}
