import { FC, PropsWithChildren, useState } from "react"

import { Button } from "@/shared/ui"

import { FilterDeviceModal } from "../FilterDeviceModal"

export const FilterDeviceModalOpenButton: FC<PropsWithChildren> = ({ children }) => {
	const [isShow, setIsShow] = useState(false)

	const closeHandler = () => {
		setIsShow(false)
	}

	const clickHandler = () => {
		setIsShow(true)
	}

	return (
		<>
			<Button variant="contained" color="secondary" onClick={clickHandler}>
				{children}
			</Button>
			<FilterDeviceModal isShow={isShow} closeHandler={closeHandler} />
		</>
	)
}
