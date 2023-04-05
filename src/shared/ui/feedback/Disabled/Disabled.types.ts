import { HTMLMotionProps } from "framer-motion"

export interface DisabledProps extends HTMLMotionProps<"div"> {
	isDisabled?: boolean
	className?: string
}

export interface DisabledStyledProps {
	isdisabled: string
}
