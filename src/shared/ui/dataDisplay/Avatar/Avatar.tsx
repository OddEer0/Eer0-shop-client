/* eslint-disable react/display-name */
import Image from "next/image"
import { PropsWithChildren, forwardRef, useImperativeHandle, useRef } from "react"
import { HiOutlineCamera } from "react-icons/hi"

import { cn, getFirstLetters } from "@/shared/helpers"

import { AvatarWrapper } from "./Avatar.styles"
import { AvatarProps, EnumType } from "./Avatar.types"

enum ImageSize {
	"xlarge" = 72,
	"large" = 64,
	"medium" = 56,
	"small" = 48,
	"xsmall" = 40,
	"xxsmall" = 32
}

export const Avatar = forwardRef<HTMLInputElement, PropsWithChildren<AvatarProps>>(
	(
		{
			url = null,
			alt = "",
			className = "",
			avatarSize = "medium",
			isChangeable = false,
			defaultAvatar = null,
			variant = "circle",
			width,
			height,
			changeableIcon,
			children,
			...props
		},
		ref
	) => {
		const cl = cn("prefix", avatarSize, variant, className)
		const random = defaultAvatar ? (defaultAvatar.codePointAt(0) as number) % 10 : null
		const inputRef = useRef<HTMLInputElement>(null)
		useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

		const clickHandler = () => {
			if (inputRef.current) {
				inputRef.current.click()
			}
		}

		return (
			<AvatarWrapper randomColor={random as EnumType} className={cl}>
				{url ? (
					<Image
						draggable={false}
						width={width ? width : ImageSize[avatarSize]}
						height={height ? height : ImageSize[avatarSize]}
						src={url}
						alt={alt}
					/>
				) : defaultAvatar ? (
					getFirstLetters(defaultAvatar)
				) : (
					children
				)}
				{isChangeable && (
					<>
						<input {...props} ref={inputRef} type="file" accept="image/png, image/jpeg" />
						<label data-testid="label" onClick={clickHandler} className="photo">
							{changeableIcon ? changeableIcon : <HiOutlineCamera />}
						</label>
					</>
				)}
			</AvatarWrapper>
		)
	}
)
