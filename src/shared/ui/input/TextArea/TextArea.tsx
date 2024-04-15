/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react"

import { $TextArea } from "./TextArea.styles"
import { TextAreaProps } from "./TextArea.types"

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ textareaColor = "primary", label = "", subText = "", className, ...props }, ref) => {
		const textAreaRef = useRef<HTMLTextAreaElement>(null)

		useImperativeHandle(ref, () => textAreaRef.current as HTMLTextAreaElement)

		const focusHandler = () => {
			if (textAreaRef.current) {
				textAreaRef.current.focus()
			}
		}

		return (
			<$TextArea color={textareaColor} className={className}>
				{label && (
					<label className="text-area__label" onClick={focusHandler}>
						{label}
					</label>
				)}
				<textarea ref={textAreaRef} {...props} />
				{subText && <p className="text-area__sub-text">{subText}</p>}
			</$TextArea>
		)
	}
)
