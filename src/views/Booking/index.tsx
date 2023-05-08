import { FC } from "react"

import { BookingDeviceCardList } from "@/entities/BookingDevice"

import { ApproveButton, RefoundBookingDevice } from "@/features/DeviceAction"

import { Meta } from "@/shared/ui"

export const BookingView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Заказанные" />
			<div className="">
				<BookingDeviceCardList approve={ApproveButton} refound={RefoundBookingDevice} />
			</div>
		</>
	)
}
