import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import { ProfileAvatar } from "@/entities/User"

import { Container } from "@/shared/ui"

import { MenuBurger } from "../MenuBurger"

import { $FirstSection, $ToggleThemeIcon } from "./Header.styles"

export const FirstSection: FC = () => {
	return (
		<$FirstSection>
			<Container className="container">
				<div className="left-wrapper">
					<MenuBurger />
				</div>
				<motion.div
					animate={{ rotate: 360, scale: [1.4, 1] }}
					transition={{ duration: 0.35, repeat: Infinity, repeatDelay: 10 }}
				>
					<Link href="/">
						<Image draggable={false} src="/images/logo.png" width={40} height={40} alt="" priority />
					</Link>
				</motion.div>
				<div className="right-wrapper">
					<$ToggleThemeIcon />
					<ProfileAvatar />
				</div>
			</Container>
		</$FirstSection>
	)
}
