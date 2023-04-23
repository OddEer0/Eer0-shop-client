import { useRouter } from "next/router"
import { FC } from "react"

import { DeviceImageSlider, useDeviceQuery } from "@/entities/Device"

import { Container } from "@/shared/ui"

import { $DeviceView } from "./Device.styles"

const DeviceView: FC = () => {
	const { query } = useRouter()

	const { data } = useDeviceQuery(query.deviceId as string)

	return (
		<$DeviceView>
			<Container>
				<DeviceImageSlider images={data?.images || []} alt={data?.name} />
			</Container>
		</$DeviceView>
	)
}

export default DeviceView
