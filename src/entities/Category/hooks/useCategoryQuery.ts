import { useQuery } from "@tanstack/react-query"

import { ICategory, fakeApi } from "@/shared/api"

export const useCategoryQuery = () => {
	const result = useQuery(
		["category"],
		async () => {
			const { data } = await fakeApi.get<ICategory[]>("category")
			return data
		},
		{ staleTime: 1000 * 60 * 60, cacheTime: Infinity }
	)

	return result
}
