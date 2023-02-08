import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

import { cn } from "@/shared/helpers"

import { navList } from "../../consts"

import { $SecondSection } from "./Header.styles"

export const SecondSection: FC = () => {
	const { pathname } = useRouter()

	return (
		<$SecondSection>
			<ul className="nav__list">
				{navList.map(list => (
					<motion.li key={list.id} className={cn("nav__link", list.href === pathname ? "nav__link--active" : "")}>
						<Link href={list.href}>{list.title}</Link>
					</motion.li>
				))}
			</ul>
		</$SecondSection>
	)
}
