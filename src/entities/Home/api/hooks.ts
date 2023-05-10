import { useQuery } from "@tanstack/react-query"

import { homeService } from "@/shared/api"
import { convertMinutesToMs } from "@/shared/helpers"

export const useHomeSliderQuery = () => {
	return useQuery(["home-slider"], () => homeService.getHomeSlider(), {
		cacheTime: convertMinutesToMs(10),
		staleTime: convertMinutesToMs(5)
	})
}
