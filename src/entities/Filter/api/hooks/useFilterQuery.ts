import { useQuery } from "@tanstack/react-query"

import { filterService } from "@/shared/api"
import { convertMinutesToMs } from "@/shared/helpers"

export const useFilterQuery = (id: string, enabled = true) => {
	return useQuery(["filter", id], () => filterService.getFiltersByCategoryId(id), {
		enabled: !!id && enabled,
		cacheTime: id ? convertMinutesToMs(10) : 0,
		staleTime: convertMinutesToMs(8)
	})
}
