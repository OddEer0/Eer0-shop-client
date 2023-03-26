import { HTMLMotionProps, motion } from "framer-motion"
import { FC, PropsWithChildren } from "react"

import { $DeviceAside } from "./DeviceAside.styles"

export const DeviceAside: FC<PropsWithChildren<HTMLMotionProps<"div">>> = ({ children, ...props }) => {
	return (
		<$DeviceAside as={motion.div} {...props}>
			<div className=""></div>
			{children}
		</$DeviceAside>
	)
}
