import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import { FC, PropsWithChildren } from "react"
import styled from "styled-components"

import { Portal } from "../../utility"

export const $Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: #00000034;
`

const animation = {
	show: {
		opacity: 1
	},
	hidden: {
		opacity: 0
	},
	init: {
		opacity: 0
	}
}

interface OverlayProps extends HTMLMotionProps<"div"> {
	isShow: boolean
}

export const Overlay: FC<PropsWithChildren<OverlayProps>> = ({
	isShow,
	children,
	transition = { type: "keyframes" },
	animate = "show",
	initial = "init",
	exit = "hidden",
	...props
}) => {
	return (
		<Portal>
			<AnimatePresence>
				{isShow && (
					<$Overlay
						as={motion.div}
						transition={transition}
						variants={animation}
						animate={animate}
						initial={initial}
						exit={exit}
						{...props}
					>
						{children}
					</$Overlay>
				)}
			</AnimatePresence>
		</Portal>
	)
}
