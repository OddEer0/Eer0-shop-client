import { motion } from "framer-motion"
import { FC, PropsWithChildren } from "react"

import { $Disabled } from "./Disabled.styles"
import { DisabledProps } from "./Disabled.types"

export const Disabled: FC<PropsWithChildren<DisabledProps>> = ({ isDisabled = true, className = "", children }) => {
	return (
		<$Disabled isdisabled={isDisabled ? "true" : ""} as={motion.div} className={className}>
			{children}
			<div className="disabled-overlay"></div>
		</$Disabled>
	)
}
