import { useState } from "react"

import { useEncodeParams } from "./useEncodeParams"

export const useToggleParam = (paramName: string, paramValue: string, reverse = false) => {
	const params = useEncodeParams()
	const [isHaveParam, setIsHaveParam] = useState(() => {
		return params.has(paramName, paramValue)
	})

	const toggleHandle = () => {
		if (isHaveParam) {
			setIsHaveParam(false)
			if (reverse) {
				params.append(paramName, paramValue)
			} else {
				params.remove(paramName, paramValue)
			}
		} else {
			if (reverse) {
				params.remove(paramName, paramValue)
			} else {
				params.append(paramName, paramValue)
			}
			setIsHaveParam(true)
		}
	}

	return {
		isHaveParam,
		toggleHandle
	}
}
