import { ChangeEvent, FC, useMemo, useState } from "react"

import { IFilterWithInfo } from "@/shared/api"
import { TextField } from "@/shared/ui"

import { CheckboxListItem } from "../CheckboxListItem"

import { $FilterSearchedCheckboxList } from "./FilterSearchedCheckboxList.styles"

interface FilterSearchedCheckboxListProps {
	filter: IFilterWithInfo
}

export const FilterSearchedCheckboxList: FC<FilterSearchedCheckboxListProps> = ({ filter }) => {
	const [searchedValue, setSearchedValue] = useState("")

	const infoList = useMemo(() => {
		if (searchedValue) {
			return filter.infos.filter(info => info.value.toLowerCase().includes(searchedValue.toLowerCase()))
		}
		return filter.infos
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchedValue])

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchedValue(e.target.value)
	}

	return (
		<$FilterSearchedCheckboxList>
			<TextField placeholder="Поиск..." onChange={changeHandler} value={searchedValue} />
			{infoList.map(info => (
				<CheckboxListItem key={info.id} name={filter.name} value={info.value} />
			))}
		</$FilterSearchedCheckboxList>
	)
}
