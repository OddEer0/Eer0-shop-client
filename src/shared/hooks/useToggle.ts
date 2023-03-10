/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from "react"

export const useToggle = (init = false, coolDown = 0, firstCallback?: () => void, secondCallback?: () => void) => {
	const [state, setState] = useState(init)
	const cd = useRef(true)

	const closeHandler = useCallback(() => {
		setState(false)
		if (secondCallback) {
			secondCallback()
		}
	}, [])

	const openHandler = useCallback(() => {
		setState(true)
		if (firstCallback) {
			firstCallback()
		}
	}, [])

	const toggleHandler = () => {
		if (cd.current) {
			if (state) {
				closeHandler()
			} else {
				openHandler()
			}
			cd.current = false
			setTimeout(() => (cd.current = true), coolDown)
		}
	}

	return { state, toggleHandler, openHandler, closeHandler }
}
