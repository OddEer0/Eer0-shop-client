import { FC } from "react"

import { BookingDeviceCardLazy } from "../BookingDeviceCard"

import { $BookingDeviceCardListLazy } from "./BookingDeviceCardList.styles"

export const BookingDeviceCardListLazy: FC = () => {
	return (
		<$BookingDeviceCardListLazy>
			{new Array(20).fill("").map((_, i) => (
				<BookingDeviceCardLazy key={i} />
			))}
		</$BookingDeviceCardListLazy>
	)
}
