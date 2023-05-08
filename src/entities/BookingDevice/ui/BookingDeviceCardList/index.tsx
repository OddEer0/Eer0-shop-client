import { FC, PropsWithChildren } from "react"

import { ButtonProps } from "@/shared/ui"

import { useBookingsDevices } from "../../api"
import { BookingDeviceCard } from "../BookingDeviceCard"

import { $BookingDeviceCardList } from "./BookingDeviceCardList.styles"

interface IButton extends ButtonProps {
	id: string
}

interface BookingDeviceCardListProps {
	approve: FC<PropsWithChildren<IButton>>
	refound: FC<PropsWithChildren<IButton>>
}

export const BookingDeviceCardList: FC<BookingDeviceCardListProps> = ({ approve: Approve, refound: Refound }) => {
	const { data, isLoading, error } = useBookingsDevices()

	if (isLoading) {
		return <div className="">Loading...</div>
	}

	if (error) {
		return <div className="">Error</div>
	}

	return (
		<$BookingDeviceCardList>
			{data && data.length ? (
				data.map(booking => (
					<BookingDeviceCard
						count={booking.count}
						name={booking.device.name}
						refound={
							<Refound id={booking.id} variant="contained" size="small">
								Отменить заказ
							</Refound>
						}
						approve={
							<Approve id={booking.id} variant="contained" size="small">
								Товар получен
							</Approve>
						}
						images={booking.device.images[0]}
						key={booking.id}
					/>
				))
			) : (
				<div className="">Нет заказанных</div>
			)}
		</$BookingDeviceCardList>
	)
}
