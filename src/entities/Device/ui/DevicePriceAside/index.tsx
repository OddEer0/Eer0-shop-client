import { motion } from "framer-motion"
import { FC, ReactNode } from "react"

import { yToDownAnimation } from "@/shared/animation"
import { cn } from "@/shared/helpers"

import { devicePriceQuerySelector, useDeviceQuery } from "../../api"

import { $Aside } from "./DevicePriceAside.styles"

interface DevicePageAsideProps {
	id: string
	cart?: ReactNode
	favorite?: ReactNode
	buy?: ReactNode
	className?: string
}

export const DevicePriceAside: FC<DevicePageAsideProps> = ({ id, buy, cart, favorite, className = "" }) => {
	const { data } = useDeviceQuery(id, devicePriceQuerySelector)
	const cl = cn("price", "h4", data?.stock ? "stock" : "")

	return data ? (
		<$Aside className={className}>
			<motion.div variants={yToDownAnimation} custom={1} animate="show" initial="hidden" className="first">
				{data.stock ? <h4 className="h4 stock-price">{data.stock} Руб</h4> : null}
				<h4 className={cl}>{data.price} Руб</h4>
			</motion.div>
			{data.stockPercent ? (
				<motion.div
					animate={{ x: 0, opacity: 1 }}
					initial={{ x: -50, opacity: 0 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className="second"
				>
					<p className="h5">Скидка</p>
					<h5 className="h5">-{data.price * (data.stockPercent / 100)} руб</h5>
				</motion.div>
			) : null}
			{cart && (
				<motion.div variants={yToDownAnimation} custom={2} animate="show" initial="hidden" className="third">
					{cart}
				</motion.div>
			)}
			{favorite && (
				<motion.div variants={yToDownAnimation} custom={3} animate="show" initial="hidden" className="fourth">
					{favorite}
				</motion.div>
			)}
			{buy && (
				<motion.div variants={yToDownAnimation} custom={4} animate="show" initial="hidden" className="fifth">
					{buy}
				</motion.div>
			)}
		</$Aside>
	) : null
}
