import { FC, HTMLAttributes } from "react"

import { deviceNameQuerySelector, useDeviceQuery } from "@/entities/Device"

interface DeviceNameProps extends HTMLAttributes<HTMLHeadingElement> {
	id: string
}

export const DeviceName: FC<DeviceNameProps> = ({ id, ...props }) => {
	const { data } = useDeviceQuery(id, deviceNameQuerySelector)

	return data ? <h3 {...props}>{data}</h3> : null
}
