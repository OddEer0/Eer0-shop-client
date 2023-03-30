import { FC } from "react"

import { Skeleton } from "@/shared/ui"

import { $DeviceSkeleton } from "./DeviceCard.styles"

interface DeviceCardSkeletonProps {
	className?: string
}

export const DeviceCardSkeleton: FC<DeviceCardSkeletonProps> = ({ className }) => {
	return (
		<$DeviceSkeleton className={className}>
			<Skeleton width="320px" height="350px" />
			<Skeleton width="290px" height="30px" variant="rounded" className="title-skeleton" />
			<div className="circle-list">
				<Skeleton variant="circle" width="15px" height="15px" />
				<Skeleton variant="circle" width="15px" height="15px" />
				<Skeleton variant="circle" width="15px" height="15px" />
			</div>
		</$DeviceSkeleton>
	)
}
