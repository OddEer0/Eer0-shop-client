import { FC } from "react"

import { useProfileQuery, userAvatarQuerySelector } from "@/entities/User"

import { $ChangeUserAvatar } from "./ChangeUserAvatar.styles"

interface ChangeUserAvatarProps {
	className?: string
}

export const ChangeUserAvatar: FC<ChangeUserAvatarProps> = ({ className }) => {
	const { data, isLoading } = useProfileQuery(userAvatarQuerySelector)

	if (isLoading) {
		return <>loading</>
	}

	return (
		<$ChangeUserAvatar className={className} isChangeable={true} url={data?.avatar} defaultAvatar={data?.firstName} />
	)
}
