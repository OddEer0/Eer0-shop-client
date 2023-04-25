import { useQuery } from "@tanstack/react-query"
import { ParsedUrlQuery } from "querystring"

import { IDevice$Infos, IDeviceAxiosResponse, deviceService } from "@/shared/api"
import { convertMinutesToMs, convertSecondsToMs } from "@/shared/helpers"

export const useDeviceQuery = <T = IDevice$Infos>(id: string, select?: (state: IDevice$Infos) => T) => {
	return useQuery(["device", id], () => deviceService.getOneDevice(id), {
		select,
		cacheTime: convertMinutesToMs(2),
		staleTime: convertMinutesToMs(1)
	})
}

export const useDeviceWithoutInfoQuery = <T = IDevice$Infos>(id: string, select?: (state: IDevice$Infos) => T) => {
	return useQuery(["device", "without-info", id], () => deviceService.getOneDevice(id), {
		select,
		cacheTime: convertMinutesToMs(2),
		staleTime: convertMinutesToMs(1)
	})
}

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
