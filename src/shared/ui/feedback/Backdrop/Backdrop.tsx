import { motion } from "framer-motion"
import { FC, PropsWithChildren } from "react"

import { Portal } from "../../utility"

import { $Backdrop } from "./Backdrop.styles"
import { BackdropProps } from "./Backdrop.types"

export const Backdrop: FC<PropsWithChildren<BackdropProps>> = ({ isShow, className = "", children, ...props }) => {
	return (
		<Portal>
			{isShow && (
				<$Backdrop as={motion.div} className={className} {...props}>
					{children}
				</$Backdrop>
			)}
		</Portal>
	)
}
