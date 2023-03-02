import { FC } from "react"

import { TextField } from "@/shared/ui"

import { useLoginForm } from "../../hooks"

import { $Button, $Form, $FormWrapper, $Input, $Link, $LinkTitle, $Title } from "./LoginForm.styles"

export const LoginForm: FC = () => {
	const { getEmailInputProps, getPasswordInputProps, submitHandler } = useLoginForm()

	return (
		<$FormWrapper>
			<$Title className="h4">Авторизация</$Title>
			<$Form onSubmit={submitHandler}>
				<$Input as={TextField} {...getEmailInputProps} />
				<$Input as={TextField} {...getPasswordInputProps} />
				<$Button variant="contained">SUBMIT</$Button>
			</$Form>
			<$LinkTitle className="caption-14-b">Забыли пароль?</$LinkTitle>
			<$Link href="reset" className="caption-14-m">
				Восстановить
			</$Link>
		</$FormWrapper>
	)
}
