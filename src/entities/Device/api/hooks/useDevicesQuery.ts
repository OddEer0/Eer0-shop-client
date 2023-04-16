import { useQuery } from "@tanstack/react-query"
import { ParsedUrlQuery } from "querystring"

import { IDeviceAxiosResponse, deviceService } from "@/shared/api"
import { convertMinutesToMs, convertSecondsToMs } from "@/shared/helpers"

export const useFilteredAndSortedDevicesQuery = <T>(
	urlQuery: ParsedUrlQuery,
	select?: (data: IDeviceAxiosResponse) => T
) => {
	return useQuery(["device", urlQuery], () => deviceService.getFilteredAndSortedDevice(urlQuery), {
		select,
		cacheTime: convertMinutesToMs(2),
		staleTime: convertSecondsToMs(30),
		keepPreviousData: true
	})
}
