import { FC } from "react"

import { DeviceCardSkeleton } from "../DeviceCard"

interface DeviceCardsSkeletonListProps {
	count?: number
}

export const DeviceCardsSkeletonList: FC<DeviceCardsSkeletonListProps> = ({ count = 16 }) => {
	return (
		<>
			{new Array(count).fill("").map((_, i) => (
				<DeviceCardSkeleton className="list-gap" key={i} />
			))}
		</>
	)
}
