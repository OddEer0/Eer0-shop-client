import { useQuery } from "@tanstack/react-query"

import { ICart } from "@/shared/api"

export const useCartQuery = <T = ICart>(select?: (data: ICart) => T) => {
	return useQuery(["cart"], {
		select,
		cacheTime: Infinity,
		staleTime: Infinity
	})
}
