import { FC, ReactNode } from "react"

import { $TitledSwitch } from "./TitledSwitch.styles"

interface TitledSwitchProps {
	title: string
	switchComponent: ReactNode
}

export const TitledSwitch: FC<TitledSwitchProps> = ({ title, switchComponent }) => {
	return (
		<$TitledSwitch>
			<h5 className="h5">{title}</h5>
			{switchComponent}
		</$TitledSwitch>
	)
}
