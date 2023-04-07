/* eslint-disable react/display-name */
import { PropsWithChildren, forwardRef, useImperativeHandle, useRef } from "react"
import { BiUpload } from "react-icons/bi"

import { $Upload } from "./Upload.styles"
import { UploadProps } from "./Upload.types"

export const Upload = forwardRef<HTMLInputElement, PropsWithChildren<UploadProps>>(
	({ uploadSize = "medium", color = "primary", className = "", isDefaultIcon = true, children }, ref) => {
		const inputRef = useRef<HTMLInputElement>(null)
		useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

		const clickHandler = () => {
			if (inputRef.current) {
				inputRef.current.click()
			}
		}

		return (
			<$Upload color={color} size={uploadSize} className={className}>
				<input type="file" ref={inputRef} />
				<div className="upload" onClick={clickHandler}>
					{isDefaultIcon && <BiUpload className="upload-icon" />}
					{children}
				</div>
			</$Upload>
		)
	}
)
