import { FC } from "react"

import { ChangeProfile } from "@/features/UserAction"

import { Container, Meta } from "@/shared/ui"

import { $ProfileEdit } from "./ProfileEdit.styles"

export const ProfileEditView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Profile" />
			<$ProfileEdit>
				<Container>
					<ChangeProfile />
				</Container>
			</$ProfileEdit>
		</>
	)
}
