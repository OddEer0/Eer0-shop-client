import { useRouter } from "next/router"

type OrderType = "asc" | "desc"

export const useUrlSort = (defaultSortBy?: string, defaultOrder?: OrderType) => {
	const router = useRouter()

	const urlHandle = (sortBy?: string, order?: OrderType) => {
		const isDefault = defaultSortBy === sortBy && defaultOrder === order
		const resultQuery = router.query

		if (isDefault) {
			delete resultQuery.sortBy
			delete resultQuery.order
		} else {
			resultQuery.sortBy = sortBy
			resultQuery.order = order
		}

		router.push({
			query: resultQuery
		})
	}

	return urlHandle
}
