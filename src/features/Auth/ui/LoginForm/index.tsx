import { FC } from "react"

import { TextField } from "@/shared/ui"

import { useUserLoginForm } from "../../lib"

import { $Button, $Form, $FormWrapper, $Link, $LinkTitle, $Title } from "./LoginForm.styles"

export const LoginForm: FC = () => {
	const { getEmailInputProps, getPasswordInputProps, submitHandler } = useUserLoginForm()

	return (
		<$FormWrapper>
			<$Title className="h4">Авторизация</$Title>
			<$Form onSubmit={submitHandler}>
				<TextField {...getEmailInputProps} className="input" />
				<TextField {...getPasswordInputProps} className="input" />
				<$Button variant="contained">SUBMIT</$Button>
			</$Form>
			<$LinkTitle className="caption-14-b">Забыли пароль?</$LinkTitle>
			<$Link href="reset" className="caption-14-m">
				Восстановить
			</$Link>
		</$FormWrapper>
	)
}
