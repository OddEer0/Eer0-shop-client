/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react"

import { cn } from "@/shared/helpers"

import { SwitchWrapper } from "./Switch.styles"
import { SwitchProps } from "./Switch.types"

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
	({ icon = null, className = "", color = "primary", switchSize = "medium", ...props }, ref) => {
		const switchRef = useRef<HTMLInputElement>(null)
		useImperativeHandle(ref, () => switchRef.current as HTMLInputElement)

		const clickHandler = () => {
			if (switchRef.current) {
				switchRef.current.click()
			}
		}

		return (
			<SwitchWrapper data-testid="switch-wrapper" className={cn("prefix", color, switchSize, className)}>
				<input ref={switchRef} type="checkbox" {...props} />
				<div onClick={clickHandler} className="switch">
					{icon ? <span className="circle icon">{icon}</span> : <span className="circle"></span>}
				</div>
			</SwitchWrapper>
		)
	}
)
