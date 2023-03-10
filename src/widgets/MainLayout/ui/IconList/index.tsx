import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"

import { Badge } from "@/shared/ui"

import { ICON_LIST } from "../../constants"

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
			{ICON_LIST.map((li, i) => (
				<motion.li key={li.id} variants={animation} initial="initial" animate="animate" custom={i} className="icon">
					<Badge color="primary" overlap="square" variant="content" size="small">
						<Link href={li.href}>{<li.icon />}</Link>
					</Badge>
				</motion.li>
			))}
		</$IconList>
	)
}
