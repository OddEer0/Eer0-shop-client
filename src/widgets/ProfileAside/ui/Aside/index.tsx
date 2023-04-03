import { FC, PropsWithChildren } from "react"

import { ProfileAsideNav } from "../ProfileAsideNav"

import { $ProfileAside } from "./Aside.styles"

export const ProfileAside: FC<PropsWithChildren> = ({ children }) => {
	return (
		<$ProfileAside>
			<aside>
				<ProfileAsideNav />
			</aside>
			<div className="body">{children}</div>
		</$ProfileAside>
	)
}
