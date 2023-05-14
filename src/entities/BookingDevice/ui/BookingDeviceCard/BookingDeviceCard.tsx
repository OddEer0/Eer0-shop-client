import Image from "next/image"
import { FC, ReactNode } from "react"

import { $BookingDeviceCard } from "./BookingDeviceCard.styles"

interface BookingDeviceCardProps {
	images: string
	name: string
	count: number
	refound?: ReactNode
	approve?: ReactNode
}

export const BookingDeviceCard: FC<BookingDeviceCardProps> = ({ images, name, refound, count, approve }) => {
	return (
		<$BookingDeviceCard>
			<Image width={200} height={125} src={images} alt={name} />
			<div className="booking-device-card__content">
				<h3 className="h3">{name}</h3>
				<p>Количество: {count}</p>
			</div>
			<div className="booking-device-card__feature">
				{refound && <div className="booking-device-card__refound">{refound}</div>}
				{approve && <div className="booking-device-card__approve">{approve}</div>}
			</div>
		</$BookingDeviceCard>
	)
}
