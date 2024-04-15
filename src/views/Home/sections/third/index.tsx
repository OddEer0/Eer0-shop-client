import { FC } from "react"

import { GameZoneDeviceList } from "../../ui/GameZoneDeviceList"

import { $ThirdSection } from "./third.styles"

export const ThirdSection: FC = () => {
	return (
		<$ThirdSection>
			<h2 className="h2">Игровые девайсы</h2>
			<GameZoneDeviceList />
		</$ThirdSection>
	)
}
