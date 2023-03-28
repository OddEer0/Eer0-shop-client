import { useQuery } from "@tanstack/react-query"

import { filterService } from "@/shared/api"

export const useFilterQuery = (id: string) => {
	return useQuery(["filter", id], () => filterService.getFiltersByCategoryId(id))
}
