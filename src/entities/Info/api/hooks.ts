import { useQuery } from "@tanstack/react-query"

import { infoService } from "@/shared/api"
import { convertMinutesToMs } from "@/shared/helpers"

export const useDeviceInfosQuery = (id: string, limit?: number | "all") => {
	return useQuery(["info", id], () => infoService.getByDeviceId(id, limit), {
		cacheTime: convertMinutesToMs(2),
		staleTime: convertMinutesToMs(1),
		retry: false
	})
}
