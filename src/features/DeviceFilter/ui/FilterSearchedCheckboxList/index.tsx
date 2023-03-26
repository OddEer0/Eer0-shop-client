import { FC } from "react"

import { IFilterWithInfo } from "@/shared/api"
import { TextField } from "@/shared/ui"

import { CheckboxListItem } from "../CheckboxListItem"

import { $FilterSearchedCheckboxList } from "./FilterSearchedCheckboxList.styles"

interface FilterSearchedCheckboxListProps {
	filter: IFilterWithInfo
}

export const FilterSearchedCheckboxList: FC<FilterSearchedCheckboxListProps> = ({ filter }) => {
	return (
		<$FilterSearchedCheckboxList>
			<TextField />
			{filter.infos.map(info => (
				<CheckboxListItem key={info.id} name={filter.name} value={info.value} />
			))}
		</$FilterSearchedCheckboxList>
	)
}
