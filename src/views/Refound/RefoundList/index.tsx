import { FC } from "react"

import { BookingDeviceCard } from "@/entities/BookingDevice"
import { useRefound } from "@/entities/Refound"

import { $PurchaseDeviceList } from "./styles"

export const RefoundList: FC = () => {
	const { data, isLoading } = useRefound()

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
