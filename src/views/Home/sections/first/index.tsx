import { FC } from "react"

import { HomeSlider } from "@/entities/Home"

import { $FirstSection } from "./first.styles"

export const FirstSection: FC = () => {
	return (
		<$FirstSection>
			<HomeSlider />
		</$FirstSection>
	)
}
