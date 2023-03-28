import { useRouter } from "next/router"
import { FC } from "react"

import { useFilterQuery } from "@/entities/Filter"

import { FilterSearchedCheckboxList } from "@/features/DeviceFilter"

import { circleOpenAnimation } from "@/shared/animation"
import { Accordion } from "@/shared/ui"

import { $DeviceFilterModal, $Modal } from "./DeviceFilterModal.styles"

interface DeviceFilterModalProps {
	isShow: boolean
	closeHandler: () => void
}

export const FilterDeviceModal: FC<DeviceFilterModalProps> = ({ closeHandler, isShow }) => {
	const { query } = useRouter()
	const { data, isLoading, error } = useFilterQuery(query.category as string)

	return (
		<$Modal
			isShow={isShow}
			closeHandler={closeHandler}
			variants={circleOpenAnimation}
			animate="open"
			exit="closed"
			initial="closed"
		>
			{isLoading ? (
				<div className="">loading</div>
			) : error ? (
				<div className="">error</div>
			) : data && data.length ? (
				<$DeviceFilterModal>
					{data.map(filter => (
						<Accordion key={filter.id}>
							<Accordion.Summary text={filter.title}>
								<FilterSearchedCheckboxList filter={filter} />
							</Accordion.Summary>
						</Accordion>
					))}
				</$DeviceFilterModal>
			) : (
				<div className="">Нет фильтров</div>
			)}
		</$Modal>
	)
}
