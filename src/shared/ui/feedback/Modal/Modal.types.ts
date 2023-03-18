import { HTMLMotionProps } from "framer-motion"

type ColorType = "primary" | "secondary" | "tertiary" | "quaternary"

export interface StyledModal {
	color: ColorType
}

export interface ModalProps extends HTMLMotionProps<"div"> {
	isShow: boolean
	closeHandler: () => void
	className?: string
	color?: ColorType
}
