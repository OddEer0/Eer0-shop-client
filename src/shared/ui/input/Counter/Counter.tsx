import { FC } from "react"

import { useCounter } from "@/shared/hooks"

import { $Counter } from "./Counter.styles"
import { CounterProps } from "./Counter.types"

export const Counter: FC<CounterProps> = ({
	value = 1,
	maxValue = 100,
	minValue = 1,
	setCount = 1,
	changeValue,
	className = "",
	debounceTime = 0,
	color = "primary",
	size = "medium"
}) => {
	const { state, changeHandler, minusHandler, plusHandler } = useCounter(
		setCount,
		value,
		minValue,
		maxValue,
		changeValue,
		debounceTime
	)

	return (
		<$Counter color={color} size={size} className={className}>
			<button className="counter-btn minus-btn" onClick={minusHandler}>
				-
			</button>
			<input type="number" className="counter-input" value={state} onChange={changeHandler} />
			<button className="counter-btn plus-btn" onClick={plusHandler}>
				+
			</button>
		</$Counter>
	)
}
