import { useQuery } from "@tanstack/react-query"
import { ParsedUrlQuery } from "querystring"

import { IDeviceAxiosResponse, deviceService } from "@/shared/api"

export const useFilteredAndSortedDevicesQuery = <T>(
	urlQuery: ParsedUrlQuery,
	select?: (data: IDeviceAxiosResponse) => T
) => {
	return useQuery(["device", urlQuery], () => deviceService.getFilteredAndSortedDevice(urlQuery), {
		select
	})
}
