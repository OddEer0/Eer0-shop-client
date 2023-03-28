import { FC } from "react"

import { TextField } from "@/shared/ui"

import { useUserRegistrationForm } from "../../lib"

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
	} = useUserRegistrationForm()

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
