import { FC } from "react"

import { RegistrationForm } from "@/features/Auth"

import { Meta } from "@/shared/ui"

import { AuthLayout } from "@/widgets/AuthLayout"

import { ImgHead } from "./ui"

const RegistrationView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Registration" />
			<AuthLayout
				form={<RegistrationForm />}
				imgUrl="/illustration/registration-illustration.png"
				imgHead={<ImgHead />}
			/>
		</>
	)
}

export default RegistrationView
