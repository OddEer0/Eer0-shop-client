import { useQuery } from "@tanstack/react-query"
import { ParsedUrlQuery } from "querystring"

import { IDeviceAxiosResponse, deviceService } from "@/shared/api"

export const useDevicesQuery = <T>(urlQuery: ParsedUrlQuery, select?: (data: IDeviceAxiosResponse) => T) => {
	return useQuery(["device", urlQuery], () => deviceService.getDevicesByCategory(urlQuery), {
		select: select
	})
}
