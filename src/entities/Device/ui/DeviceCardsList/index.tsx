import { useRouter } from "next/router"
import { FC } from "react"

import { useDevicesQuery } from "../../api"
import { deviceQuerySelector } from "../../model"
import { DeviceCard } from "../DeviceCard"
import { DeviceCardSkeleton } from "../DeviceCard/Device.lazy"

import { $DeviceCardsList } from "./DeviceCardsList.styles"

interface CompProps {
	id: string
}

interface DeviceCardsListProps {
	CartComponent: FC<CompProps>
	FavoriteComponent: FC<CompProps>
}

export const DeviceCardsList: FC<DeviceCardsListProps> = ({ CartComponent, FavoriteComponent }) => {
	const router = useRouter()
	const { query } = router
	const { data, isLoading, error } = useDevicesQuery(query, deviceQuerySelector)

	return (
		<$DeviceCardsList>
			{isLoading ? (
				<DeviceCardSkeleton />
			) : error ? (
				<span>Что-то пошло не так</span>
			) : data && data.length ? (
				data.map(device => (
					<DeviceCard
						key={device.id}
						device={device}
						cart={<CartComponent id={device.id} />}
						favorite={<FavoriteComponent id={device.id} />}
					/>
				))
			) : (
				<h2 className="h2">Товаров с данной категорией на данный момент нет (((</h2>
			)}
		</$DeviceCardsList>
	)
}
