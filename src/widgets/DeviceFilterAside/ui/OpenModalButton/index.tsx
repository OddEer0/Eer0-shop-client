import { FC, PropsWithChildren } from "react"

import { useToggle } from "@/shared/hooks"
import { Button } from "@/shared/ui"

import { FilterDeviceModal } from "../FilterDeviceModal"

export const OpenModalButton: FC<PropsWithChildren> = ({ children }) => {
	const { state, toggleHandler } = useToggle(false, 400)

	return (
		<>
			<Button className="open-device-modal-btn" size="small" variant="contained" onClick={toggleHandler}>
				{children}
			</Button>
			<FilterDeviceModal isShow={state} closeHandler={toggleHandler} />
		</>
	)
}
