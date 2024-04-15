import { HTMLAttributes } from "react"

export interface StyledEmpty {
	width?: string
}

export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
	width?: string
	count?: number
}
