import { FC } from "react"

import { DeviceCardsList } from "@/entities/Device"

import { ToggleCartIcon, ToggleFavoriteIcon } from "@/features/CartAction"

import { Container, Meta } from "@/shared/ui"

import { FilterDeviceAside } from "@/widgets/DeviceFilterAside"

import { $DeviceView } from "./Device.styles"

const DeviceView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Home" />
			<$DeviceView>
				<Container className="container">
					<FilterDeviceAside />
					<DeviceCardsList CartComponent={ToggleCartIcon} FavoriteComponent={ToggleFavoriteIcon} />
				</Container>
			</$DeviceView>
		</>
	)
}

export default DeviceView
