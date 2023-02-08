import { motion } from "framer-motion"
import { FC } from "react"
import { BiCartAlt, BiHeart, BiUser } from "react-icons/bi"

import { $IconList } from "./IconList.styles"

const initial = {
	y: -60,
	opacity: 0,
	scale: 0.5
}

export const IconList: FC = () => {
	return (
		<$IconList>
			<motion.li
				initial={initial}
				animate={{ y: 0, scale: 1, opacity: 1 }}
				transition={{ delay: 0.2 }}
				className="icon-list__icon"
			>
				<BiHeart />
			</motion.li>
			<motion.li
				initial={initial}
				animate={{ y: 0, scale: 1, opacity: 1 }}
				transition={{ delay: 0.4 }}
				className="icon-list__icon"
			>
				<BiCartAlt />
			</motion.li>
			<motion.li
				initial={initial}
				animate={{ y: 0, scale: 1, opacity: 1 }}
				transition={{ delay: 0.6 }}
				className="icon-list__icon"
			>
				<BiUser />
			</motion.li>
		</$IconList>
	)
}
