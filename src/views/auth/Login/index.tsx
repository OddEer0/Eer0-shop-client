import { FC } from "react"

import { LoginForm } from "@/features/Auth"

import { Meta } from "@/shared/ui"

import { AuthLayout } from "@/widgets/AuthLayout"

import { ImgHead } from "./ui"

const LoginView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Login" />
			<AuthLayout form={<LoginForm />} imgHead={<ImgHead />} imgUrl="/illustration/login-illustration.png" />
		</>
	)
}

export default LoginView
