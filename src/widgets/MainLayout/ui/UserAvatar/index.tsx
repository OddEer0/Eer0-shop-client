import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { FC } from "react"
import { BiUser } from "react-icons/bi"

import { IUser } from "@/shared/api"
import { Avatar, Skeleton } from "@/shared/ui"

import { AvatarIcon } from "./UserAvatar.styles"

export const UserPanel: FC = () => {
	const { data: user, isLoading } = useQuery(["profile"], {
		select(data: IUser) {
			if (data) {
				return { avatar: data.avatar, firstName: data.firstName }
			}
			return null
		}
	})

	if (isLoading) {
		return <Skeleton variant="circle" width="56px" height="56px" />
	}

	if (user) {
		return <Avatar url={user.avatar} defaultAvatar={user.firstName} />
	}

	return (
		<Link href="/auth/login">
			<Avatar>
				<AvatarIcon as={BiUser} />
			</Avatar>
		</Link>
	)
}
