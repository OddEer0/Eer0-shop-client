import { FC } from "react"

import { IFilter$Infos } from "@/shared/api"
import { useInput } from "@/shared/hooks"
import { TextField } from "@/shared/ui"

import { CheckboxListItem } from "../CheckboxListItem"

import { $FilterSearchedCheckboxList } from "./FilterSearchedCheckboxList.styles"

interface FilterSearchedCheckboxListProps {
	filter: IFilter$Infos
}

export const FilterSearchedCheckboxList: FC<FilterSearchedCheckboxListProps> = ({ filter }) => {
	const input = useInput("")

	const infoList = filter.infos.filter(info => info.value.toLowerCase().includes(input.value.toLowerCase()))

	return (
		<$FilterSearchedCheckboxList>
			<TextField placeholder="Поиск..." {...input} />
			{infoList.map(info => (
				<CheckboxListItem key={info.id} name={filter.name} value={info.value} />
			))}
		</$FilterSearchedCheckboxList>
	)
}
