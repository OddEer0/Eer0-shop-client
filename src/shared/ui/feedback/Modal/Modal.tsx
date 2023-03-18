import { AnimatePresence, motion } from "framer-motion"
import { FC, PropsWithChildren } from "react"

import { opacityAnimation } from "@/shared/animation"

import { Portal } from "../../utility"

import { $Modal } from "./Modal.styles"
import { ModalProps } from "./Modal.types"

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
	isShow,
	closeHandler,
	children,
	className = "",
	color = "primary",
	...props
}) => {
	return (
		<Portal>
			<AnimatePresence>
				{isShow && (
					<$Modal as={motion.div} className={className} color={color}>
						<motion.div
							className="modal-overlay"
							onClick={closeHandler}
							variants={opacityAnimation}
							initial={false}
							animate="show"
							exit="hidden"
							data-testid="overlay"
						/>
						<motion.div className="modal-main" {...props}>
							{children}
						</motion.div>
					</$Modal>
				)}
			</AnimatePresence>
		</Portal>
	)
}
