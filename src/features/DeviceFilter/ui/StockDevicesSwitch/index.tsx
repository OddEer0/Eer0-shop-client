import { FC } from "react"

import { useToggleParam } from "@/shared/hooks"
import { Switch } from "@/shared/ui"

export const StockDeviceSwitch: FC = () => {
	const { isHaveParam, toggleHandle } = useToggleParam("isstock", "yes")

	return <Switch onChange={toggleHandle} checked={isHaveParam} />
}
