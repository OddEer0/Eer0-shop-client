import { FC } from "react"

import { NewDeviceCardList } from "../../ui/NewDeviceCardList"

import { $SecondSection } from "./second.styles"

export const SecondSection: FC = () => {
	return (
		<$SecondSection>
			<h2 className="h2">Новые девайсы</h2>
			<NewDeviceCardList />
		</$SecondSection>
	)
}
