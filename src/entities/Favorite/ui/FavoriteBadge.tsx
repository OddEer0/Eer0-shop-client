import { FC, PropsWithChildren } from "react"

import { Badge } from "@/shared/ui"

import { favoriteDeviceSelector, useFavoritePersistStore } from "../model"

export const FavoriteBadge: FC<PropsWithChildren> = ({ children }) => {
	const device = useFavoritePersistStore(favoriteDeviceSelector, null)

	return (
		<Badge overlap="square" color="primary" variant="content" content={device?.length || 0} size="small">
			{children}
		</Badge>
	)
}
