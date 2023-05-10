import { useRouter } from "next/router"
import { FC } from "react"

import { IDevice } from "@/shared/api"
import { Empty } from "@/shared/ui"

import { deviceQuerySelector, useFilteredAndSortedDevicesQuery } from "../../api"
import { DeviceCard } from "../DeviceCard"

import { DeviceCardsSkeletonList } from "./DeviceCardsList.lazy"
import { $DeviceCardsList } from "./DeviceCardsList.styles"

interface CompProps {
	id: string
}

interface FavoriteCompProps {
	device: IDevice
}

interface DeviceCardsListProps {
	CartComponent: FC<CompProps>
	FavoriteComponent: FC<FavoriteCompProps>
}

export const DeviceCardsList: FC<DeviceCardsListProps> = ({ CartComponent, FavoriteComponent }) => {
	const { query } = useRouter()
	const { data, isLoading, error } = useFilteredAndSortedDevicesQuery(query, deviceQuerySelector)

	return (
		<$DeviceCardsList>
			{isLoading ? (
				<DeviceCardsSkeletonList />
			) : error ? (
				<span>Что-то пошло не так</span>
			) : data && data.length ? (
				<>
					{data.map(device => (
						<DeviceCard
							key={device.id}
							device={device}
							cart={<CartComponent id={device.id} />}
							className="list-gap"
							favorite={<FavoriteComponent device={device} />}
						/>
					))}
					<Empty className="list-gap" width="280px" count={2} />
				</>
			) : (
				<h2 className="h2">Товаров с данной категорией на данный момент нет (((</h2>
			)}
		</$DeviceCardsList>
	)
}
