/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react"

import { cn } from "@/shared/helpers"

import { RadioWrapper } from "./Radio.styles"
import { RadioProps } from "./Radio.types"

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	(
		{
			checkedIcon = null,
			uncheckedIcon = null,
			color = "primary",
			radioSize = "medium",
			placement = "right",
			label = null,
			className = "",
			...props
		},
		ref
	) => {
		const radioRef = useRef<HTMLInputElement>(null)
		useImperativeHandle(ref, () => radioRef.current as HTMLInputElement)

		const clickHandler = () => {
			if (radioRef.current) {
				radioRef.current.click()
			}
		}

		return (
			<RadioWrapper data-testid="radio-wrapper" className={cn("prefix", color, radioSize, placement, className)}>
				<div onClick={clickHandler} className="radio-wrapper">
					<div className="wrapper">
						<input ref={radioRef} type="radio" {...props} className="radio-input" />
						{uncheckedIcon ? (
							<span className="unchecked-icon">{uncheckedIcon}</span>
						) : (
							<span className="unchecked"></span>
						)}
						{checkedIcon ? <span className="checked-icon">{checkedIcon}</span> : <span className="checked"></span>}
					</div>
				</div>
				{label && (
					<label onClick={clickHandler} className="label">
						{label}
					</label>
				)}
			</RadioWrapper>
		)
	}
)
