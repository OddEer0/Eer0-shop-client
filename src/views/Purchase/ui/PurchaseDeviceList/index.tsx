import { FC } from "react"

import { BookingDeviceCard } from "@/entities/BookingDevice"
import { usePurchaseDevice } from "@/entities/PurchaseDevice"

import { $PurchaseDeviceList } from "./styles"

export const PurchaseDeviceList: FC = () => {
	const { data, isLoading } = usePurchaseDevice()

	if (isLoading) {
		return <div className="">loading</div>
	}

	return data && data.length ? (
		<$PurchaseDeviceList>
			{data.map(purchase => (
				<BookingDeviceCard
					key={purchase.id}
					count={purchase.count}
					images={purchase.device.images[0]}
					name={purchase.device.name}
				/>
			))}
		</$PurchaseDeviceList>
	) : null
}
