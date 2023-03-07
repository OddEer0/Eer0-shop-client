import { useQuery } from "@tanstack/react-query"
import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import { BiUser } from "react-icons/bi"

import { IUser } from "@/shared/api"
import { Avatar, Skeleton } from "@/shared/ui"

import { $AvatarIcon, $Wrapper } from "./HeaderUserAvatar.styles"

export const HeaderUserAvatar: FC = () => {
	const { data: user, isLoading } = useQuery(["profile"], {
		select(data: IUser) {
			if (data) {
				return { avatar: data.avatar, firstName: data.firstName }
			}
			return null
		}
	})

	return (
		<$Wrapper transition={{ delay: 0.15 }} as={motion.div} initial={{ y: -100 }} animate={{ y: 0 }}>
			{isLoading ? (
				<Skeleton variant="circle" width="56px" height="56px" />
			) : user ? (
				<Avatar url={user.avatar} defaultAvatar={user.firstName} />
			) : (
				<Link href="/auth/login">
					<Avatar>
						<$AvatarIcon as={BiUser} />
					</Avatar>
				</Link>
			)}
		</$Wrapper>
	)
}
