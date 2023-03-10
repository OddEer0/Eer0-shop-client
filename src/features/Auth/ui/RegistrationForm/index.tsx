import { FC } from "react"

import { TextField } from "@/shared/ui"

import { useRegistrationForm } from "../../hooks"

import { $Button, $Form, $FormInputSection, $FormWrapper, $Title } from "./RegistrationForm.styles"

export const RegistrationForm: FC = () => {
	const {
		getEmailInputProps,
		getCopyPasswordInputProps,
		getNicknameInputProps,
		getPasswordInputProps,
		getFirstNameInputProps,
		getLastNameInputProps,
		submitHandler
	} = useRegistrationForm()

	return (
		<$FormWrapper>
			<$Title className="h4">Регистрация</$Title>
			<$Form onSubmit={submitHandler}>
				<$FormInputSection>
					<TextField {...getEmailInputProps} />
					<TextField {...getNicknameInputProps} />
					<TextField {...getFirstNameInputProps} />
					<TextField {...getLastNameInputProps} />
					<TextField {...getPasswordInputProps} />
					<TextField {...getCopyPasswordInputProps} />
				</$FormInputSection>
				<$Button variant="contained">SUBMIT</$Button>
			</$Form>
		</$FormWrapper>
	)
}
