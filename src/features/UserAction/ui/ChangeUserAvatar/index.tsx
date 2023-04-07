import { FC, useRef } from "react"

import { CropImageFileForChange, IAcceptCropChange } from "@/entities/File"
import { useChangeUserAvatarMutate, useProfileQuery, userAvatarQuerySelector } from "@/entities/User"

import { useImageChange } from "@/shared/hooks"

import { $ChangeUserAvatar } from "./ChangeUserAvatar.styles"

interface ChangeUserAvatarProps {
	className?: string
}

export const ChangeUserAvatar: FC<ChangeUserAvatarProps> = ({ className }) => {
	const { data, isLoading } = useProfileQuery(userAvatarQuerySelector)
	const { mutate } = useChangeUserAvatarMutate()
	const { image, setImage, changeHandler } = useImageChange()
	const fileRef = useRef<HTMLInputElement>(null)

	const acceptHandler = (e: IAcceptCropChange) => {
		if (e.file && data) {
			mutate({ id: data.id, image: e.file })
		}
	}

	const closeHandler = () => {
		if (fileRef.current) {
			fileRef.current.value = ""
		}
	}

	if (isLoading) {
		return <div>loading</div>
	}

	return (
		<>
			<$ChangeUserAvatar
				className={className}
				isChangeable={true}
				width={150}
				height={150}
				onChange={changeHandler}
				url={data?.avatar}
				defaultAvatar={data?.firstName}
				ref={fileRef}
			/>
			<CropImageFileForChange
				image={image}
				setImage={setImage}
				onAcceptCropImage={acceptHandler}
				onClose={closeHandler}
			/>
		</>
	)
}
