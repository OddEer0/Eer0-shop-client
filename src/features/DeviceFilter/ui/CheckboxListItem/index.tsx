import { FC } from "react"

import { Checkbox } from "@/shared/ui"

import { $CheckboxListItem } from "./CheckboxListItem.styles"
import { useCheckboxToggleParam } from "@/shared/hooks"

interface CheckboxListItemProps {
	name: string
	value: string
}

export const CheckboxListItem: FC<CheckboxListItemProps> = ({ value, name }) => {
	const checkbox = useCheckboxToggleParam(name, value)

	return (
		<$CheckboxListItem>
			<Checkbox checkboxSize="large" value={value} {...checkbox} />
			<h4 onClick={checkbox.onChange}>{value}</h4>
		</$CheckboxListItem>
	)
}
