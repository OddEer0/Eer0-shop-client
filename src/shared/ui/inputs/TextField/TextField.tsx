/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

import { cn } from "@/shared/helpers"

import { TextFieldContainer } from "./TextField.styles"
import { TextFieldProps } from "./TextField.types"

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

		return (
			<TextFieldContainer className={cl}>
				{label && (
					<h4 className="eer0-ui-textfield__label" onClick={focusHandler}>
						{label}
					</h4>
				)}
				<div className="eer0-ui-textfield__wrapper">
					{startIcon && <span className="eer0-ui-textfield__start-icon">{startIcon}</span>}
					<input className="eer0-ui-textfield__input" {...props} type={inputType} ref={inputRef} />
					{type === "password" ? (
						<span onClick={toggleTypeHandler}>
							{endIcon ? endIcon : inputType === "password" ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
						</span>
					) : (
						endIcon && <span className="eer0-ui-textfield__end-icon">{endIcon}</span>
					)}
				</div>
				{subText && <p className="eer0-ui-textfield__sub-text">{subText}</p>}
			</TextFieldContainer>
		)
	}
)
