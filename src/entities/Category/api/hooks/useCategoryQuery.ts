import { useQuery } from "@tanstack/react-query"

import { categoryService } from "@/shared/api"

export const useCategoryQuery = () => {
	return useQuery(["category"], () => categoryService.getCategory(), {
		staleTime: 1000 * 60 * 60,
		cacheTime: Infinity
	})
}
