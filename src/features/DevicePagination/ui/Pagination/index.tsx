import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"

import { devicePageCountQuerySelector, useFilteredAndSortedDevicesQuery } from "@/entities/Device"

import { Skeleton } from "@/shared/ui"

import { $DevicePagination, $PaginationCenter } from "./Pagination.styles"

export const DevicePagination: FC = () => {
	const router = useRouter()
	const { data, isLoading } = useFilteredAndSortedDevicesQuery(router.query, devicePageCountQuerySelector)
	const [page, setPage] = useState(0)

	const pageClickHandler = (e: { selected: number }) => {
		router.push({
			query: {
				...router.query,
				page: e.selected + 1
			}
		})
	}

	useEffect(() => {
		if (router.query.page) {
			setPage(+router.query.page - 1)
		}
	}, [router.query.page])

	if (isLoading) {
		return (
			<$PaginationCenter>
				<Skeleton width="80%" height="25px" variant="rounded" />
			</$PaginationCenter>
		)
	}

	return data && data > 1 ? (
		<$DevicePagination forcePage={page} pageRangeDisplayed={9} onPageChange={pageClickHandler} pageCount={data} />
	) : null
}
