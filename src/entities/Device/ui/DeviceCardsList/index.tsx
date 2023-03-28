import { useRouter } from "next/router"
import { FC } from "react"

import { useFilteredAndSortedDevicesQuery } from "../../api"
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
	const { query } = useRouter()
	const { data, isLoading, error } = useFilteredAndSortedDevicesQuery(query, deviceQuerySelector)

	return (
		<$DeviceCardsList>
			{isLoading ? (
				<DeviceCardSkeleton className="list-gap" />
			) : error ? (
				<span>Что-то пошло не так</span>
			) : data && data.length ? (
				data.map(device => (
					<DeviceCard
						key={device.id}
						device={device}
						cart={<CartComponent id={device.id} />}
						className="list-gap"
						favorite={<FavoriteComponent id={device.id} />}
					/>
				))
			) : (
				<h2 className="h2">Товаров с данной категорией на данный момент нет (((</h2>
			)}
		</$DeviceCardsList>
	)
}
