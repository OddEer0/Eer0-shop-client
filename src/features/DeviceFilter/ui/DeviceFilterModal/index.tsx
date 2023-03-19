import { useQuery } from "@tanstack/react-query"
import { FC, useState } from "react"

import { IFilter, fakeApi } from "@/shared/api"
import { Modal } from "@/shared/ui"

interface DeviceFilterModalProps {
	id: string
}

export const DeviceFilterModal: FC<DeviceFilterModalProps> = ({ id }) => {
	const [isShow, setIsShow] = useState(true)
	const { data } = useQuery(["filter", id], async () => {
		const res = await fakeApi.get<IFilter[]>("")
		return res.data
	})

	return (
		<Modal isShow={isShow} closeHandler={() => setIsShow(false)}>
			{data && data.map(filter => <div key={filter.id}>{filter.name}</div>)}
		</Modal>
	)
}
