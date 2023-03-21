import { AnimatePresence, motion } from "framer-motion"
import { FC, PropsWithChildren, useContext, useState } from "react"
import { SlArrowUp } from "react-icons/sl"

import { AccordionContext } from "./Accordion.context"
import { $AccordionSummary } from "./Accordion.styles"
import { AccordionSummaryProps } from "./Accordion.types"

const animation = {
	hidden: {
		opacity: 0,
		height: 0
	},
	show: {
		opacity: 1,
		height: "auto"
	}
}

export const AccordionSummary: FC<PropsWithChildren<AccordionSummaryProps>> = ({
	text,
	children,
	subText,
	endIcon = null,
	defaultState = false,
	summaryId = null,
	className = "",
	...props
}) => {
	const [isShow, setIsShow] = useState(defaultState)
	const { mode, openSummary, setOpenSummary } = useContext(AccordionContext)

	const toggleHandler = () => {
		if (mode === "standard") setIsShow(prev => !prev)
		if (mode === "controlled") {
			const id = () => {
				if (summaryId) return summaryId
				return ""
			}
			if (summaryId === openSummary) {
				setOpenSummary("")
			} else {
				setOpenSummary(id())
			}
		}
	}

	const isOpenHandler = (() => {
		if (mode === "standard") {
			return isShow
		}
		return openSummary === summaryId
	})()

	return (
		<$AccordionSummary className={className}>
			<motion.div className="accordion-summary-header" onClick={toggleHandler} {...props}>
				<h4>{text}</h4>
				{subText && <p>{subText}</p>}
				<motion.span
					animate={{ rotate: isOpenHandler ? 180 : 0 }}
					transition={{ type: "keyframes" }}
					className="summary-icon"
				>
					{endIcon ? endIcon : <SlArrowUp />}
				</motion.span>
			</motion.div>
			<AnimatePresence>
				{isOpenHandler && (
					<motion.div
						className="accordion-summary-body"
						variants={animation}
						animate="show"
						initial="hidden"
						exit="hidden"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</$AccordionSummary>
	)
}
