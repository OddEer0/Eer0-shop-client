/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

import { cn } from "@/shared/helpers"

import { TextFieldProps } from "./TextField.types"
import { FilledTextField } from "./styles/filled.styles"
import { OutlinedTextField } from "./styles/outlined.styles"
import { StandardTextField } from "./styles/standard.styles"

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			variant = "outlined",
			color = "primary",
			endIcon = null,
			startIcon = null,
			type = "text",
			label = "",
			subText = "",
			inputSize = "medium",
			className = "",
			...props
		},
		ref
	) => {
		const [inputType, setInputType] = useState(type)
		const inputRef = useRef<HTMLInputElement>(null)

		useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

		const focusHandler = () => {
			if (inputRef.current) {
				inputRef.current.focus()
			}
		}

		const toggleTypeHandler = () => setInputType(prev => (prev === "password" ? "text" : "password"))

		const cl = cn("prefix", variant, color, inputSize, className)

		const TextFieldContent = (
			<>
				{label && (
					<h4 data-testid="label" className="label" onClick={focusHandler}>
						{label}
					</h4>
				)}
				<div className="wrapper">
					{startIcon && <span className="start-icon">{startIcon}</span>}
					{type === "password" ? (
						<span className="end-icon-default" onClick={toggleTypeHandler}>
							{endIcon ? (
								endIcon
							) : inputType === "password" ? (
								<AiOutlineEyeInvisible data-testid="close-eye" />
							) : (
								<AiOutlineEye data-testid="open-eye" />
							)}
						</span>
					) : (
						endIcon && <span className="end-icon">{endIcon}</span>
					)}
					<input className="input" {...props} type={inputType} ref={inputRef} />
				</div>
				{subText && (
					<p data-testid="sub-text" className="sub-text">
						{subText}
					</p>
				)}
			</>
		)

		return (
			<>
				{variant === "standard" ? (
					<StandardTextField data-testid="wrapper" className={cl}>
						{TextFieldContent}
					</StandardTextField>
				) : variant === "filled" ? (
					<FilledTextField data-testid="wrapper" className={cl}>
						{TextFieldContent}
					</FilledTextField>
				) : (
					<OutlinedTextField data-testid="wrapper" className={cl}>
						{TextFieldContent}
					</OutlinedTextField>
				)}
			</>
		)
	}
)
