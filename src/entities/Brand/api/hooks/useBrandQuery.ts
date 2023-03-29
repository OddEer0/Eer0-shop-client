import { useQuery } from "@tanstack/react-query"

import { brandService } from "@/shared/api"
import { convertMinutesToMs } from "@/shared/helpers"

export const useBrandQuery = (id: string) => {
	return useQuery(["brand", id], () => brandService.getBrandsByCategoryId(id), {
		enabled: !!id,
		cacheTime: id ? convertMinutesToMs(10) : 0,
		staleTime: convertMinutesToMs(8)
	})
}
