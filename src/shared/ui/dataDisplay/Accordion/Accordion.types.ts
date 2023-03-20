import { HTMLMotionProps } from "framer-motion"
import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"

type ModeType = "standard" | "controlled"

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
	mode?: ModeType
	defaultOpen?: string
	className?: string
}

export interface AccordionSummaryProps extends HTMLMotionProps<"div"> {
	text: string | ReactNode
	summaryId?: Nullable<string>
	subText?: string
	endIcon?: Nullable<ReactNode>
	defaultState?: boolean
	className?: string
}

export interface AccordionFC extends FC<PropsWithChildren<AccordionProps>> {
	Summary: FC<PropsWithChildren<AccordionSummaryProps>>
}

export interface AccordionContextType {
	mode: ModeType
	openSummary: string
	setOpenSummary: (summaryText: string) => void
}
