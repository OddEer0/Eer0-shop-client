import { useRouter } from "next/router"
import { FC } from "react"

import { DeviceCardsList, deviceQuerySelector, useFilteredAndSortedDevicesQuery } from "@/entities/Device"

import { AddDeviceToCartIcon } from "@/features/CartAction"
import { ToggleFavoriteIcon } from "@/features/FavoriteAction"

export const FilteredAndSortedCardList: FC = () => {
	const { query } = useRouter()
	const { data, error, isLoading } = useFilteredAndSortedDevicesQuery(query, deviceQuerySelector)

	return (
		<DeviceCardsList
			data={data}
			error={error}
			isLoading={isLoading}
			CartComponent={AddDeviceToCartIcon}
			FavoriteComponent={ToggleFavoriteIcon}
		/>
	)
}
