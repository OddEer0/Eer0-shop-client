import { useQuery } from "@tanstack/react-query"

import { IUser } from "@/shared/api"

export const useProfileQuery = <T = IUser>(select?: (data: Nullable<IUser>) => T) => {
	return useQuery(["profile"], {
		select
	})
}
