import { FC } from "react"

import { DevicePagination } from "@/features/DevicePagination"
import { DeviceSortSelect } from "@/features/DeviceSort"

import { Container } from "@/shared/ui"

import { FilterDeviceAside } from "@/widgets/DeviceFilterAside"

import { $DeviceView } from "./Devices.styles"
import { FilteredAndSortedCardList } from "./ui/FilteredAndSortedCardList"

const DevicesView: FC = () => {
	return (
		<$DeviceView>
			<Container className="container">
				<FilterDeviceAside />
				<div className="content">
					<div className="content-head">
						<DeviceSortSelect />
					</div>
					<FilteredAndSortedCardList />
					<DevicePagination />
				</div>
			</Container>
		</$DeviceView>
	)
}

export default DevicesView
