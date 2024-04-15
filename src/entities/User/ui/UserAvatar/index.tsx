import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import { BiUser } from "react-icons/bi"

import { Avatar, Skeleton } from "@/shared/ui"

import { useProfileQuery, userAvatarQuerySelector } from "../../api"

import { $AvatarIcon, $Wrapper } from "./UserAvatar"

export const ProfileAvatar: FC = () => {
	const { data: user, isLoading } = useProfileQuery(userAvatarQuerySelector)

	return (
		<$Wrapper transition={{ delay: 0.2 }} as={motion.div} initial={{ y: 0 }} animate={{ y: 0 }}>
			{isLoading ? (
				<Skeleton variant="circle" width="40px" height="40px" />
			) : user ? (
				<Link href="/profile">
					<Avatar avatarSize="xsmall" url={user.avatar} defaultAvatar={user.firstName} />
				</Link>
			) : (
				<Link href="/auth/login" className="icon">
					<$AvatarIcon as={BiUser} />
				</Link>
			)}
		</$Wrapper>
	)
}
