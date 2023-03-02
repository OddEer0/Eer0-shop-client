import { FC } from "react"

import { LoginForm } from "@/features/Auth"

import { AuthLayout } from "@/widgets/AuthLayout"

import { ImgHead } from "./ui"

export const LoginView: FC = () => {
	return <AuthLayout form={<LoginForm />} imgHead={<ImgHead />} imgUrl="/illustration/login-illustration.png" />
}
