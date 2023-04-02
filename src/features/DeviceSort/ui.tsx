import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import { SingleValue } from "react-select"

import { ISelectOption, Select } from "@/shared/ui"

import { SORT_SELECT_OPTIONS } from "./lib"
import { useUrlSort } from "./useUrlSort"

interface DeviceSortSelectProps {
	className?: string
}

export const DeviceSortSelect: FC<DeviceSortSelectProps> = ({ className }) => {
	const handler = useUrlSort("rate", "asc")
	const [selectOption, setSelectOption] = useState(() => {
		return SORT_SELECT_OPTIONS.find(opt => opt.value === "popular")
	})

	const router = useRouter()

	const changeHandler = (option: SingleValue<ISelectOption>) => {
		if (option) {
			switch (option.value) {
				case "popular":
					handler("rate", "asc")
					break
				case "unpopular":
					handler("rate", "desc")
					break
				case "new":
					handler("createdAt", "desc")
					break
				case "old":
					handler("createdAt", "asc")
					break
				case "cheap":
					handler("price", "asc")
					break
				case "expensive":
					handler("price", "desc")
			}
		}
	}

	useEffect(() => {
		console.log("dsa")
	}, [router.query.sortBy, router.query.order])

	return <Select onChange={changeHandler} className={className} value={selectOption} options={SORT_SELECT_OPTIONS} />
}
