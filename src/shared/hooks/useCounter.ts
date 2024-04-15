import { ChangeEvent, useState } from "react"

import { useDebounce } from "./useDebounce"
import { useUpdateEffect } from "./useUpdateEffect"

export const useCounter = (
	setCount = 1,
	initialNumber = 1,
	minValue = 1,
	maxValue = 100,
	onSetValue?: (value: number) => void,
	debounceTime = 0
) => {
	const [state, setState] = useState(initialNumber)
	const debounce = useDebounce(() => {
		if (onSetValue) {
			onSetValue.call(null, state)
		}
	}, debounceTime)

	useUpdateEffect(() => {
		debounce()
	}, [state])

	const plusHandler = () => {
		if (state < maxValue) {
			setState(prev => {
				if (prev + setCount < maxValue) {
					return prev + setCount
				} else {
					return maxValue
				}
			})
		}
	}

	const minusHandler = () => {
		if (state > minValue) {
			setState(prev => {
				if (prev - setCount > minValue) {
					return prev - setCount
				} else {
					return minValue
				}
			})
		}
	}

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const num = +e.target.value
		if (isNaN(num)) {
			return
		}

		if (num > maxValue) {
			setState(maxValue)
		} else if (num < minValue) {
			setState(minValue)
		} else {
			setState(num)
		}
	}

	return {
		state,
		plusHandler,
		minusHandler,
		changeHandler
	}
}
