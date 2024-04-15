import { useQuery } from "@tanstack/react-query"

import { refoundService } from "@/shared/api"
import { convertMinutesToMs } from "@/shared/helpers"

export const useRefound = () => {
	return useQuery(["refound"], () => refoundService.getRefound(), {
		cacheTime: convertMinutesToMs(2),
		staleTime: convertMinutesToMs(1)
	})
}
