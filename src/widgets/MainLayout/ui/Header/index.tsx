import { FC } from "react"

import { FirstSection } from "./FirstSection"
import { $Header } from "./Header.styles"
import { SecondSection } from "./SectionSection"

export const Header: FC = () => {
	return (
		<$Header>
			<FirstSection />
			<SecondSection />
		</$Header>
	)
}
