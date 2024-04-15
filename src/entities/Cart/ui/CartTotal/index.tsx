import { HTMLMotionProps, motion } from "framer-motion"
import { FC } from "react"

import { yToDownAnimation } from "@/shared/animation"

import { getTotalCartPrice, useCartQuery } from "../../api"

import { $CartTotal } from "./CartTotal.styles"

type CartTotalProps = HTMLMotionProps<"div">

export const CartTotal: FC<CartTotalProps> = ({ ...props }) => {
	const { data } = useCartQuery(getTotalCartPrice)

	return data ? (
		<$CartTotal as={motion.div} {...props}>
			<motion.p className="h5 text-content" variants={yToDownAnimation} initial="hidden" animate="show" custom={0}>
				<span>Цена: </span>
				<span className="text-color">{data.price} руб</span>
			</motion.p>
			<motion.p className="h5 text-content" variants={yToDownAnimation} initial="hidden" animate="show" custom={1}>
				<span>Скидка в: </span>
				<span className="text-color">{data.percentStock}%</span>
			</motion.p>
			<motion.p className="h5 text-content" variants={yToDownAnimation} initial="hidden" animate="show" custom={2}>
				<span>Со скидкой: </span>
				<span className="text-color summary">{data.stock} руб</span>
			</motion.p>
		</$CartTotal>
	) : null
}
