import { FC } from "react"

import { useToggleParam } from "@/shared/hooks"
import { Switch } from "@/shared/ui"

export const OnlyCashSwitch: FC = () => {
	const { isHaveParam, toggleHandle } = useToggleParam("isonlycash", "not", true)

	return <Switch onChange={toggleHandle} checked={isHaveParam} />
}
