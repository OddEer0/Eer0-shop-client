import { FC } from "react"
import { SingleValue } from "react-select"

import { Select } from "@/shared/ui"

import { ISortSelectOption, SORT_SELECT_OPTIONS } from "./lib"
import { useDeviceSort } from "./useDeviceSort"

interface DeviceSortSelectProps {
	className?: string
}

export const DeviceSortSelect: FC<DeviceSortSelectProps> = ({ className }) => {
	const { sortHandler, selectOption } = useDeviceSort()

	const changeHandler = (option: SingleValue<ISortSelectOption>) => {
		if (option) {
			sortHandler(option)
		}
	}

	return <Select onChange={changeHandler} className={className} value={selectOption} options={SORT_SELECT_OPTIONS} />
}
