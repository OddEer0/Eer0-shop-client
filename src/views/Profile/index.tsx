import { FC } from "react"

import { Profile } from "@/entities/User"

import { Container, Meta } from "@/shared/ui"

import { $Profile } from "./Profile.styles"

export const ProfileView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Profile" />
			<$Profile>
				<Container>
					<Profile />
				</Container>
			</$Profile>
		</>
	)
}
