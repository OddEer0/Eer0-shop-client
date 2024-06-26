import { motion } from "framer-motion"
import { FC, HTMLAttributes } from "react"

import { yToDownAnimation } from "@/shared/animation"

import { buyPriceSelector, useBuyDeviceStore } from "../../model"

import { $BuyPrice } from "./BuyPrice.styles"

type BuyPriceProps = HTMLAttributes<HTMLDivElement>

export const BuyPrice: FC<BuyPriceProps> = ({ ...props }) => {
	const { price, stockDiff, stockPercent, total } = useBuyDeviceStore(buyPriceSelector)

	return (
		<$BuyPrice {...props}>
			<motion.div className="buy-price-row" variants={yToDownAnimation} initial="hidden" animate="show" custom={0}>
				<h5 className="h5">Товары</h5>
				<p className="h5">{price} Руб</p>
			</motion.div>
			<motion.div className="buy-price-row" variants={yToDownAnimation} initial="hidden" animate="show" custom={1}>
				<h5 className="h5">Скидка</h5>
				<p className="h5">{stockPercent}%</p>
			</motion.div>
			<motion.div className="buy-price-row" variants={yToDownAnimation} initial="hidden" animate="show" custom={2}>
				<h5 className="h5">Выгода</h5>
				<p className="h5">{stockDiff} Руб</p>
			</motion.div>
			<motion.div className="buy-price-row" variants={yToDownAnimation} initial="hidden" animate="show" custom={3}>
				<h3 className="h4">Итого</h3>
				<p className="h4">{total} Руб</p>
			</motion.div>
		</$BuyPrice>
	)
}
