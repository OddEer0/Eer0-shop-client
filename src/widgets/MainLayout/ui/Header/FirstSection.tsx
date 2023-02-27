import { motion } from "framer-motion"
import Image from "next/image"
import { FC } from "react"
import { RiApps2Line } from "react-icons/ri"

import { Button } from "@/shared/ui/inputs/Button"
import { TextField } from "@/shared/ui/inputs/TextField"

import { IconList } from "../IconList"

import { $FirstSection } from "./Header.styles"

export const FirstSection: FC = () => {
	return (
		<$FirstSection>
			<div className="header__left">
				<Button className="header__category" variant="contained" color="secondary">
					<RiApps2Line className="header__category-icon" />
					Category
				</Button>
				<TextField className="header__search" />
			</div>
			<Image draggable={false} src="/images/logo.png" width={75} height={75} alt="" priority />
			<div className="header__right">
				<IconList />
				<motion.p
					initial={{ y: -100, scale: 0.9, opacity: 0 }}
					animate={{ y: 0, scale: 1, opacity: 1 }}
					transition={{ delay: 0.8 }}
					className="header__contact"
				>
					+996 558 070 400
				</motion.p>
			</div>
		</$FirstSection>
	)
}
