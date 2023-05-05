import { useQuery } from "@tanstack/react-query"

import { ICategory, categoryService } from "@/shared/api"
import { convertHoursToMs } from "@/shared/helpers"

export const useCategoryOneQuery = <T = ICategory>(id: string, select?: (data: ICategory) => T) => {
	return useQuery(["category", id], () => categoryService.getOneCategory(id), {
		select
	})
}

export const useCategoryQuery = () => {
	return useQuery(["category"], () => categoryService.getCategory(), {
		staleTime: convertHoursToMs(1),
		cacheTime: Infinity
	})
}
