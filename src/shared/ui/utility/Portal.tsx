import { FC, PropsWithChildren, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

export const Portal: FC<PropsWithChildren> = ({ children }) => {
	const ref = useRef<Element | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>("#myportal")
		setMounted(true)
	}, [])

	return mounted && ref.current ? createPortal(children, ref.current) : null
}
