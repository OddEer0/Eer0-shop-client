import { FC } from "react"

import { useToggleParam } from "@/shared/hooks"
import { Checkbox } from "@/shared/ui"

import { $CheckboxListItem } from "./CheckboxListItem.styles"

interface CheckboxListItemProps {
	name: string
	value: string
}

export const CheckboxListItem: FC<CheckboxListItemProps> = ({ value, name }) => {
	const { isHaveParam, toggleHandle } = useToggleParam(name, value)

	return (
		<$CheckboxListItem>
			<Checkbox checkboxSize="large" value={value} onChange={toggleHandle} checked={isHaveParam} />
			<h4 onClick={toggleHandle}>{value}</h4>
		</$CheckboxListItem>
	)
}
