import { FC, useMemo } from "react"

import { IFilterWithInfo } from "@/shared/api"
import { useInput } from "@/shared/hooks"
import { TextField } from "@/shared/ui"

import { CheckboxListItem } from "../CheckboxListItem"

import { $FilterSearchedCheckboxList } from "./FilterSearchedCheckboxList.styles"

interface FilterSearchedCheckboxListProps {
	filter: IFilterWithInfo
}

export const FilterSearchedCheckboxList: FC<FilterSearchedCheckboxListProps> = ({ filter }) => {
	const input = useInput("")

	const infoList = useMemo(() => {
		if (input.value) {
			return filter.infos.filter(info => info.value.toLowerCase().includes(input.value.toLowerCase()))
		}
		return filter.infos
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [input.value])

	return (
		<$FilterSearchedCheckboxList>
			<TextField placeholder="Поиск..." {...input} />
			{infoList.map(info => (
				<CheckboxListItem key={info.id} name={filter.name} value={info.value} />
			))}
		</$FilterSearchedCheckboxList>
	)
}
