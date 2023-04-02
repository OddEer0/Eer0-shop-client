import { useCallback, useRef } from "react"

export const useDebounce = (callback: () => void, delay: number) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const timeout = useRef<any>(null)

	const debouncedCallback = useCallback(() => {
		if (timeout.current) {
			clearTimeout(timeout.current)
		}
		timeout.current = setTimeout(callback, delay)
	}, [callback, delay])

	return debouncedCallback
}
