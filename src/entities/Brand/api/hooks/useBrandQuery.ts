import { useQuery } from "@tanstack/react-query"

import { brandService } from "@/shared/api"

export const useBrandQuery = (id: string) => {
	return useQuery(["brand", id], () => brandService.getBrandsByCategoryId(id))
}
