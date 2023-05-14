import { FC } from "react"

import { IDevice } from "@/shared/api"
import { Empty } from "@/shared/ui"

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
	data: IDevice[] | undefined
	isLoading: boolean
	error: unknown
	CartComponent: FC<CompProps>
	FavoriteComponent: FC<FavoriteCompProps>
	emptyCount?: number
	skeletonCount?: number
}

export const DeviceCardsList: FC<DeviceCardsListProps> = ({
	CartComponent,
	FavoriteComponent,
	data,
	error,
	isLoading,
	emptyCount = 2,
	skeletonCount = 16
}) => {
	return (
		<$DeviceCardsList>
			{isLoading ? (
				<DeviceCardsSkeletonList count={skeletonCount} />
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
					<Empty className="list-gap" width="280px" count={emptyCount} />
				</>
			) : (
				<h2 className="h2">Товаров с данной категорией на данный момент нет (((</h2>
			)}
		</$DeviceCardsList>
	)
}
