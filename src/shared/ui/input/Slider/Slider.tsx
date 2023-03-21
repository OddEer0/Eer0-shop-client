import Nouislider from "nouislider-react"
import { FC } from "react"

import { $Slider } from "./Slider.styles"
import { SliderProps } from "./Slider.types"

export const Slider: FC<SliderProps> = ({ size = "medium", color = "primary", className = "", ...props }) => {
	return (
		<$Slider size={size} color={color} className={className}>
			<Nouislider {...props} />
		</$Slider>
	)
}
