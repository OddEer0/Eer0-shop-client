import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"

import { LogoutButton } from "@/features/Auth"

import { ProfileAsideNav } from "../ProfileAsideNav"

import { $ProfileAside } from "./Aside.styles"

export const ProfileAside: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()

	return (
		<$ProfileAside>
			<aside>
				<ProfileAsideNav />
				<LogoutButton variant="contained" clickHandle={() => router.push("/")}>
					Выйти с аккаунта
				</LogoutButton>
			</aside>
			<div className="body">{children}</div>
		</$ProfileAside>
	)
}
