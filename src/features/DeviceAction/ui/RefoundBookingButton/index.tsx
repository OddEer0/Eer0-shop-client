import { FC, PropsWithChildren } from "react"

import { Button, ButtonProps, useConfirm } from "@/shared/ui"

import { useRefoundMutate } from "../../api"
import { CONFIRM_REFOUND_DEVICE } from "../../lib"

interface RefoundBookingDeviceProps extends ButtonProps {
	id: string
}

export const RefoundBookingDevice: FC<PropsWithChildren<RefoundBookingDeviceProps>> = ({ id, children, ...props }) => {
	const confirm = useConfirm()
	const { mutate } = useRefoundMutate()

	const clickHandler = () => {
		confirm(CONFIRM_REFOUND_DEVICE, () => mutate(id))
	}

	return (
		<Button {...props} onClick={clickHandler}>
			{children}
		</Button>
	)
}
