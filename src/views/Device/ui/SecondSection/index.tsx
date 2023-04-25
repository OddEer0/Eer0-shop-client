import { FC } from "react"

import { DeviceFullInfo } from "@/entities/Info"

import { $SecondSection } from "./SecondSection.styles"

interface SecondSectionProps {
	id: string
}

export const SecondSection: FC<SecondSectionProps> = ({ id }) => {
	return (
		<$SecondSection>
			<h2 className="h2">Характеристики</h2>
			<DeviceFullInfo id={id} />
		</$SecondSection>
	)
}
