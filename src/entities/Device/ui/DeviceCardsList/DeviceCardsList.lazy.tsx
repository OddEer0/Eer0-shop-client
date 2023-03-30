import { FC } from "react"

import { DeviceCardSkeleton } from "../DeviceCard"

export const DeviceCardsSkeletonList: FC = () => {
	return (
		<>
			{new Array(16).fill("").map((_, i) => (
				<DeviceCardSkeleton className="list-gap" key={i} />
			))}
		</>
	)
}
