import { useQuery } from "@tanstack/react-query"

import { IUser } from "@/shared/api"

export const useProfileQuery = <T>(select?: (data: IUser) => T) => {
	return useQuery(["profile"], {
		select
	})
}
