import { FC } from "react"

import { DeviceCardsList } from "@/entities/Device"

import { AddDeviceToCartIcon } from "@/features/CartAction"
import { DevicePagination } from "@/features/DevicePagination"
import { DeviceSortSelect } from "@/features/DeviceSort"
import { ToggleFavoriteIcon } from "@/features/FavoriteAction"

import { Container } from "@/shared/ui"

import { FilterDeviceAside } from "@/widgets/DeviceFilterAside"

import { $DeviceView } from "./Devices.styles"

const DevicesView: FC = () => {
	return (
		<$DeviceView>
			<Container className="container">
				<FilterDeviceAside />
				<div className="content">
					<div className="content-head">
						<DeviceSortSelect />
					</div>
					<DeviceCardsList CartComponent={AddDeviceToCartIcon} FavoriteComponent={ToggleFavoriteIcon} />
					<DevicePagination />
				</div>
			</Container>
		</$DeviceView>
	)
}

export default DevicesView
