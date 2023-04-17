import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import { BiCartAlt, BiHeart } from "react-icons/bi"

import { CartBadge } from "@/entities/Cart"
import { FavoriteBadge } from "@/entities/Favorite"

import { $IconList } from "./IconList.styles"

const animation = {
	initial: {
		y: -60,
		opacity: 0,
		scale: 0.3
	},
	animate: (i: number) => ({
		y: 0,
		scale: 1,
		opacity: 1,
		transition: {
			delay: 0.05 * i
		}
	})
}

export const IconList: FC = () => {
	return (
		<$IconList>
			<motion.li className="icon" variants={animation} initial="initial" animate="animate" custom={1}>
				<Link href="/favorite">
					<FavoriteBadge>
						<BiHeart />
					</FavoriteBadge>
				</Link>
			</motion.li>
			<motion.li className="icon" variants={animation} initial="initial" animate="animate" custom={1}>
				<Link href="/cart">
					<CartBadge>
						<BiCartAlt />
					</CartBadge>
				</Link>
			</motion.li>
		</$IconList>
	)
}
