import { FC } from "react"

import { RegistrationForm } from "@/features/Auth"

import { AuthLayout } from "@/widgets/AuthLayout"

import { ImgHead } from "./ui"

export const RegistrationView: FC = () => {
	return (
		<AuthLayout
			form={<RegistrationForm />}
			imgUrl="/illustration/registration-illustration.png"
			imgHead={<ImgHead />}
		/>
	)
}
