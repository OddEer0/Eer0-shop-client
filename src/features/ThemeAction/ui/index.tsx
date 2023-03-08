import { FC } from "react"
import { BsMoon, BsSun } from "react-icons/bs"

import { useActions } from "@/shared/hooks/useActions"
import { Checkbox } from "@/shared/ui"

export const ToggleThemeCheckbox: FC = () => {
	const { toggleTheme } = useActions()

	const changeHandler = () => {
		toggleTheme()
	}

	return <Checkbox checkboxSize="large" onChange={changeHandler} checkedIcon={<BsMoon />} uncheckedIcon={<BsSun />} />
}
