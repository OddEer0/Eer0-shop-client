import { FC } from "react"

import { DeviceCardsList, useNewDevicesQuery } from "@/entities/Device"

import { AddDeviceToCartIcon } from "@/features/CartAction"
import { ToggleFavoriteIcon } from "@/features/FavoriteAction"

export const NewDeviceCardList: FC = () => {
	const { data, isLoading, error } = useNewDevicesQuery()

	return (
		<DeviceCardsList
			data={data}
			error={error}
			isLoading={isLoading}
			CartComponent={AddDeviceToCartIcon}
			FavoriteComponent={ToggleFavoriteIcon}
			skeletonCount={8}
		/>
	)
}
