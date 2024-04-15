import { FC } from "react"

import { Skeleton } from "@/shared/ui"

import { $BookingDeviceCardLazy } from "./BookingDeviceCard.styles"

export const BookingDeviceCardLazy: FC = () => {
	return (
		<$BookingDeviceCardLazy>
			<Skeleton width="200px" height="125px" />
			<div className="booking-card__content">
				<Skeleton width="100%" height="20px" variant="rounded" />
				<Skeleton width="50%" height="20px" variant="rounded" />
			</div>
		</$BookingDeviceCardLazy>
	)
}
