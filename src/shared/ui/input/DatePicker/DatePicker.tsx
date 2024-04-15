import { FC, PropsWithChildren } from "react"
import DatePickerLib from "react-datepicker"

import { DatePickerProps } from "./DatePicker.types"

export const DatePicker: FC<PropsWithChildren<DatePickerProps>> = ({ children, ...props }) => {
	return (
		<DatePickerLib portalId="myportal" {...props}>
			{children}
		</DatePickerLib>
	)
}
