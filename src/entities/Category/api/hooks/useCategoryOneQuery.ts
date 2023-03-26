import { useQuery } from "@tanstack/react-query"

import { ICategoryAxiosResponse, categoryService } from "@/shared/api"

export const useCategoryOneQuery = <T>(id: string, select?: (data: ICategoryAxiosResponse) => T) => {
	const result = useQuery(["category", id], () => categoryService.getOneCategory(id), {
		select
	})

	return result
}
