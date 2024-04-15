import { ReactDatePickerProps } from "react-datepicker"

import { ColorType } from "@/shared/types"

export interface DatePickerProps extends ReactDatePickerProps {
	color?: ColorType
}
