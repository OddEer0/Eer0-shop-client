import { motion } from "framer-motion"
import Image from "next/image"
import { FC } from "react"

import { Container } from "@/shared/ui"

import { HeaderUserAvatar } from "../HeaderUserAvatar"
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
					<Image draggable={false} src="/images/logo.png" width={40} height={40} alt="" priority />
				</motion.div>
				<div className="right-wrapper">
					<$ToggleThemeIcon />
					<HeaderUserAvatar />
				</div>
			</Container>
		</$FirstSection>
	)
}
