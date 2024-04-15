import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"
import { BsCart } from "react-icons/bs"

import { toggleScaleAnimation } from "@/shared/animation"
import { Spinner } from "@/shared/ui"

import { useAddToCart } from "../../lib"
import { CartDeviceCounter } from "../CartDeviceCounter"

import { $AddDeviceToCart } from "./AddDeviceToCartIcon.styles"

interface AddDeviceToCartIcon {
	id: string
}

export const AddDeviceToCartIcon: FC<AddDeviceToCartIcon> = ({ id }) => {
	const { addDeviceToCartHandler, isAddLoading, isFetching, isToCart } = useAddToCart(id)

	return (
		<$AddDeviceToCart>
			<AnimatePresence mode="wait">
				{isFetching || isAddLoading ? (
					<motion.div key="load" variants={toggleScaleAnimation} exit="hidden" animate="show" initial="init">
						<Spinner size="xsmall" />
					</motion.div>
				) : isToCart ? (
					<CartDeviceCounter className="device-cart__counter" size="small" id={id} />
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
