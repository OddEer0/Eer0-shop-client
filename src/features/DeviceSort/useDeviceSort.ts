import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { ISortSelectOption, SORT_SELECT_OPTIONS } from "./lib"
import { useUrlSort } from "./useUrlSort"

export const useDeviceSort = () => {
	const setUrl = useUrlSort("rate", "desc")
	const router = useRouter()
	const [selectOption, setSelectOption] = useState(SORT_SELECT_OPTIONS[0])

	const sortHandler = (option: ISortSelectOption) => {
		if (option) {
			setSelectOption(option)
			setUrl(option.sortBy, option.order)
		}
	}

	useEffect(() => {
		const { sortBy, order } = router.query
		const option = SORT_SELECT_OPTIONS.find(option => option.sortBy === sortBy && option.order === order)
		if (option) {
			setSelectOption(option)
		} else {
			setSelectOption(SORT_SELECT_OPTIONS[0])
		}
		if (sortBy && order && typeof sortBy === "string" && (order === "asc" || order === "desc")) {
			setUrl(sortBy, order)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.query.sortBy, router.query.order])

	return { selectOption, sortHandler }
}
