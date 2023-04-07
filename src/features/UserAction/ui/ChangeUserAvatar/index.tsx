import { FC } from "react"

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

	const acceptHandler = (e: IAcceptCropChange) => {
		if (e.file && data) {
			mutate({ id: data.id, image: e.file })
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
			/>
			<CropImageFileForChange image={image} setImage={setImage} onAcceptCropImage={acceptHandler} />
		</>
	)
}
