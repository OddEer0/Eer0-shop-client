import { FC } from "react"

import { useCheckboxToggleParam } from "@/shared/hooks"
import { Switch } from "@/shared/ui"

export const StockDeviceSwitch: FC = () => {
	const checkbox = useCheckboxToggleParam("isstock", "yes")

	return <Switch {...checkbox} />
}
