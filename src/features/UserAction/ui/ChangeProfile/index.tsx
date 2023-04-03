import { FC } from "react"

import { TextField } from "@/shared/ui"

import { useChangeProfile } from "../../hooks"
import { ChangeUserAvatar } from "../ChangeUserAvatar"

import { $ChangeProfile } from "./ChangeProfile.styles"

export const ChangeProfile: FC = () => {
	const { getFirstNameProps, getLastNameProps } = useChangeProfile()

	return (
		<$ChangeProfile>
			<ChangeUserAvatar className="change-avatar" />
			<form action="">
				<TextField {...getFirstNameProps} />
				<TextField {...getLastNameProps} />
			</form>
		</$ChangeProfile>
	)
}
