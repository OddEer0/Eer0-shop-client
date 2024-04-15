import { FC } from "react"

import { useRemoveDeviceFromCartMutate } from "../../api"
import { REMOVE_DEVICE } from "../../lib"

import { $RemoveDeviceFromCartText } from "./RemoveDeviceFromCartText.styles"

interface RemoveDeviceFromCartTextProps {
	id: string
}

export const RemoveDeviceFromCartText: FC<RemoveDeviceFromCartTextProps> = ({ id }) => {
	const { mutate } = useRemoveDeviceFromCartMutate()

	const clickHandler = () => {
		mutate(id)
	}

	return <$RemoveDeviceFromCartText onClick={clickHandler}>{REMOVE_DEVICE}</$RemoveDeviceFromCartText>
}
