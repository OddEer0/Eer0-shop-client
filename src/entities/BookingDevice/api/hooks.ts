import { useQuery } from "@tanstack/react-query"

import { bookingDevicesService } from "@/shared/api"
import { convertMinutesToMs } from "@/shared/helpers"

export const useBookingsDevices = () => {
	return useQuery(["booking-device"], () => bookingDevicesService.getBookingDevices(), {
		cacheTime: convertMinutesToMs(3),
		staleTime: convertMinutesToMs(1)
	})
}
