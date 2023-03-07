import { HTMLMotionProps, motion } from "framer-motion"
import Image from "next/image"
import { FC } from "react"
import { FiMenu } from "react-icons/fi"
import { RiApps2Line } from "react-icons/ri"

import { Button, Container, TextField } from "@/shared/ui"

import { HeaderUserAvatar } from "../HeaderUserAvatar"
import { IconList } from "../IconList"

import { $FirstSection, $Header } from "./Header.styles"

interface HeaderProps extends HTMLMotionProps<"header"> {
	openHandler: () => void
}

export const Header: FC<HeaderProps> = ({ openHandler, ...props }) => {
	return (
		<$Header as={motion.header} {...props}>
			<Container>
				<$FirstSection>
					<div className="header__left">
						<FiMenu onClick={openHandler} className="header__menu-icon" />
						<Button className="header__category" variant="contained" color="secondary">
							<RiApps2Line className="header__category-icon" />
							Category
						</Button>
					</div>
					<Image draggable={false} src="/images/logo.png" width={75} height={75} alt="" priority />
					<div className="header__right">
						<TextField className="header__search" />
						<IconList />
						<HeaderUserAvatar />
					</div>
				</$FirstSection>
			</Container>
		</$Header>
	)
}
