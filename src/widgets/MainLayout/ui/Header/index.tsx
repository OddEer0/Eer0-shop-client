import { motion } from "framer-motion"
import { FC } from "react"

import { Container } from "@/shared/ui"

import { FirstSection } from "./FirstSection"
import { $Header } from "./Header.styles"
import { SecondSection } from "./SecondSection"

export const Header: FC = () => {
	return (
		<$Header as={motion.header}>
			<Container>
				<FirstSection />
				<SecondSection />
			</Container>
		</$Header>
	)
}
