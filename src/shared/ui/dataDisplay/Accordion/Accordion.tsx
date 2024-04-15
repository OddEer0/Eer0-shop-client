import { useState } from "react"

import { AccordionContext } from "./Accordion.context"
import { $Accordion } from "./Accordion.styles"
import { AccordionFC } from "./Accordion.types"
import { AccordionSummary } from "./AccordionSummary"

export const Accordion: AccordionFC = ({ className = "", mode = "standard", defaultOpen = "", children, ...props }) => {
	const [openSummary, setOpenSummary] = useState(() => {
		if (defaultOpen) {
			return defaultOpen
		}
		return ""
	})

	return (
		<$Accordion className={className} {...props}>
			<AccordionContext.Provider value={{ openSummary, setOpenSummary, mode }}>{children}</AccordionContext.Provider>
		</$Accordion>
	)
}

Accordion.Summary = AccordionSummary
