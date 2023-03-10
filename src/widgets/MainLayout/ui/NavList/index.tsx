import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"

import { NAV_LIST } from "../../constants"

import { $NavList } from "./NavList.styles"

const animation = {
	show: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			delay: 0.05 * i
		}
	}),
	init: {
		opacity: 0,
		y: -100,
		scale: 0.5
	}
}

export const NavList: FC = () => {
	return (
		<$NavList>
			<ul>
				{NAV_LIST.map((list, i) => (
					<motion.li key={list.id} variants={animation} initial="init" animate="show" custom={i}>
						<Link href={list.href}>{list.title}</Link>
					</motion.li>
				))}
			</ul>
		</$NavList>
	)
}
