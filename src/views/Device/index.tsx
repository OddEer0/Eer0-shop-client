import { FC } from "react"

import { DeviceCardsList } from "@/entities/Device"

import { ToggleCartIcon, ToggleFavoriteIcon } from "@/features/CartAction"

import { Meta } from "@/shared/ui"

import { $DeviceView } from "./Device.styles"

const DeviceView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Home" />
			<$DeviceView>
				<aside className=""></aside>
				<div className="">
					<DeviceCardsList CartComponent={ToggleCartIcon} FavoriteComponent={ToggleFavoriteIcon} />
				</div>
			</$DeviceView>
		</>
	)
}

export default DeviceView
