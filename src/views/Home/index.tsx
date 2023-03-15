import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import styled from "styled-components"

import { DeviceCard } from "@/entities/Device"

import { ToggleCartIcon, ToggleFavoriteIcon } from "@/features/CartAction"

import { IDevice, fakeApi } from "@/shared/api"
import { Meta } from "@/shared/ui"

const Wrapper = styled.div`
	height: 2000px;
`

const HomeView: FC = () => {
	const { data } = useQuery(["device"], async () => {
		const response = await fakeApi.get<IDevice[]>("category/12")
		return response.data
	})

	return (
		<>
			<Meta title="Eer0 Shop | Home" />
			{data &&
				data.map(device => (
					<DeviceCard
						key={device.id}
						favorite={<ToggleFavoriteIcon id={device.id} />}
						cart={<ToggleCartIcon id={device.id} />}
						device={device}
					/>
				))}
			<Wrapper />
		</>
	)
}

export default HomeView
