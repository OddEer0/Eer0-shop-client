import { FC } from "react"

import { useCheckboxToggleParam } from "@/shared/hooks"
import { Switch } from "@/shared/ui"

export const OnlyCashSwitch: FC = () => {
	const checkbox = useCheckboxToggleParam("isonlycash", "not")

	return <Switch {...checkbox} checked={!checkbox.checked} />
}
