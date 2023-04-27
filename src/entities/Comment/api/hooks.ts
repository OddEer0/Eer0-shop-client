import { useQuery } from "@tanstack/react-query"

import { IComment, commentService } from "@/shared/api"
import { convertMinutesToMs } from "@/shared/helpers"

export const useCommentQuery = (deviceId: string) => {
	return useQuery(["comments", deviceId], () => commentService.getCommentsByDeviceId(deviceId), {
		cacheTime: convertMinutesToMs(2),
		staleTime: convertMinutesToMs(1)
	})
}

export const useOneCommentQuery = <T = IComment>(id: string, select?: (state: IComment) => T) => {
	return useQuery(["comment", id], () => commentService.getOne(id), {
		select,
		cacheTime: convertMinutesToMs(2),
		staleTime: convertMinutesToMs(1)
	})
}
