import Image from "next/image"
import { FC } from "react"
import { RiApps2Line } from "react-icons/ri"

import { Button, TextField } from "@/shared/ui"

import { IconList } from "../IconList"
import { UserPanel } from "../UserAvatar"

import { $FirstSection } from "./Header.styles"

export const FirstSection: FC = () => {
	return (
		<$FirstSection>
			<div className="header__left">
				<Button className="header__category" variant="contained" color="secondary">
					<RiApps2Line className="header__category-icon" />
					Category
				</Button>
				<TextField className="header__search" />
			</div>
			<Image draggable={false} src="/images/logo.png" width={75} height={75} alt="" priority />
			<div className="header__right">
				<IconList />
				<UserPanel />
			</div>
		</$FirstSection>
	)
}
