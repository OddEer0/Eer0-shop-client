import { LayoutGroup, motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

import { yToDownAnimation } from "@/shared/animation"

import { ASIDE_PROFILE_NAV } from "../../lib"

import { $ProfileAsideNav } from "./ProfileAsideNav.styles"

export const ProfileAsideNav: FC = () => {
	const router = useRouter()

	return (
		<$ProfileAsideNav>
			<LayoutGroup>
				{ASIDE_PROFILE_NAV.map((li, i) => (
					<motion.li key={li.title} variants={yToDownAnimation} animate="show" initial="hidden" custom={i}>
						<Link href={li.href}>
							{router.pathname === li.href && <motion.span layoutId="profile-nav-active"></motion.span>}
							<h4>{li.title}</h4>
						</Link>
					</motion.li>
				))}
			</LayoutGroup>
		</$ProfileAsideNav>
	)
}
