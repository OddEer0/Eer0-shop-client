import { useQuery } from "@tanstack/react-query"

import { infoService } from "@/shared/api"
import { convertMinutesToMs } from "@/shared/helpers"

export const useDeviceInfosQuery = (id: string, limit?: number) => {
	return useQuery(["info", id], () => infoService.getByDeviceId(id, limit), {
		cacheTime: convertMinutesToMs(2),
		staleTime: convertMinutesToMs(1),
		retry: false
	})
}

export const useDeviceFullInfosQuery = (id: string) => {
	return useQuery(["info", "full", id], () => infoService.getByDeviceId(id, 100), {
		cacheTime: convertMinutesToMs(2),
		staleTime: convertMinutesToMs(1),
		retry: false
	})
}
