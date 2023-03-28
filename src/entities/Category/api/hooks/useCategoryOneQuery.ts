import { useQuery } from "@tanstack/react-query"

import { ICategory, categoryService } from "@/shared/api"

export const useCategoryOneQuery = <T>(id: string, select?: (data: ICategory) => T) => {
	return useQuery(["category", id], () => categoryService.getOneCategory(id), {
		select
	})
}
