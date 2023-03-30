import { useQuery } from "@tanstack/react-query"

import { categoryService } from "@/shared/api"
import { convertHoursToMs } from "@/shared/helpers"

export const useCategoryQuery = () => {
	return useQuery(["category"], () => categoryService.getCategory(), {
		staleTime: convertHoursToMs(1),
		cacheTime: Infinity
	})
}
