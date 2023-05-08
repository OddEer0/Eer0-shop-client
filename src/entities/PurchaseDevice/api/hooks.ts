import { useQuery } from "@tanstack/react-query"

import { purchaseDeviceService } from "@/shared/api"
import { convertMinutesToMs } from "@/shared/helpers"

export const usePurchaseDevice = () => {
	return useQuery(["purchase-device"], () => purchaseDeviceService.getPurchaseDevice(), {
		cacheTime: convertMinutesToMs(2),
		staleTime: convertMinutesToMs(1)
	})
}
