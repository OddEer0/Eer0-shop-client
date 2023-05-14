import { FC } from "react"

import { DeviceCardsList, useGameDevicesQuery } from "@/entities/Device"

import { AddDeviceToCartIcon } from "@/features/CartAction"
import { ToggleFavoriteIcon } from "@/features/FavoriteAction"

export const GameZoneDeviceList: FC = () => {
	const { data, isLoading, error } = useGameDevicesQuery()

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
