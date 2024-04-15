import { HTMLAttributes } from "react"

import { ColorType } from "@/shared/types"

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
	label?: string
	subText?: string
	className?: string
	textareaColor?: ColorType
}

export interface TextAreaStyledProps {
	color: ColorType
}
