import { FC } from "react"

import { DeviceCardsList } from "@/entities/Device"

import { ToggleCartIcon, ToggleFavoriteIcon } from "@/features/CartAction"
import { DevicePagination } from "@/features/DevicePagination"
import { DeviceSortSelect } from "@/features/DeviceSort"

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
					<div className="content">
						<div className="content-head">
							<DeviceSortSelect />
						</div>
						<DeviceCardsList CartComponent={ToggleCartIcon} FavoriteComponent={ToggleFavoriteIcon} />
						<DevicePagination />
					</div>
				</Container>
			</$DeviceView>
		</>
	)
}

export default DeviceView
