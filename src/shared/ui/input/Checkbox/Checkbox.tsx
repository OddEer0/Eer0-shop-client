/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react"

import { cn } from "@/shared/helpers"

import { CheckboxWrapper } from "./Checkbox.styles"
import { CheckboxProps } from "./Checkbox.types"

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			color = "primary",
			checkboxSize = "medium",
			label = null,
			placement = "right",
			checkedIcon = null,
			uncheckedIcon = null,
			className = "",
			...props
		},
		ref
	) => {
		const checkboxRef = useRef<HTMLInputElement>(null)
		useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement)

		const clickHandler = () => {
			if (checkboxRef.current) {
				checkboxRef.current.click()
			}
		}

		return (
			<CheckboxWrapper
				data-testid="checkbox-wrapper"
				className={cn("prefix", color, checkboxSize, placement, className)}
			>
				<div onClick={clickHandler} className="checkbox-wrapper">
					<div className="wrapper">
						<input ref={checkboxRef} type="checkbox" className="checkbox-input" {...props} />
						{uncheckedIcon ? (
							<span className="unchecked-icon">{uncheckedIcon}</span>
						) : (
							<span className="unchecked"></span>
						)}
						{checkedIcon ? (
							<span className="checked-icon">{checkedIcon}</span>
						) : (
							<span className="checked">
								<svg xmlns="http://www.w3.org/2000/svg" id="other_yes" fill="none" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										fillRule="evenodd"
										d="M20.9571 6.0434c.3905.3905.3905 1.0237 0 1.4142l-10.5 10.4995c-.3905.3905-1.0236.3906-1.4142.0001l-5.25-5.2496c-.3905-.3905-.3905-1.0236 0-1.4142.3905-.3905 1.0236-.3906 1.4142 0L9.75 15.8359l9.7929-9.7925c.3905-.3906 1.0237-.3905 1.4142 0Z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						)}
					</div>
				</div>
				{label && (
					<label onClick={clickHandler} className="label">
						{label}
					</label>
				)}
			</CheckboxWrapper>
		)
	}
)
