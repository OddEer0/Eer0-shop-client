import { ChangeEvent, FC } from "react"

import { useEncodeParams } from "@/shared/hooks"
import { Switch } from "@/shared/ui"

export const StockDeviceSwitch: FC = () => {
	const params = useEncodeParams()
	const isChecked = params.has("isstock", "yes")

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			params.append("isstock", "yes")
		} else {
			params.remove("isstock", "yes")
		}
	}

	return <Switch onChange={changeHandler} defaultChecked={isChecked} />
}
