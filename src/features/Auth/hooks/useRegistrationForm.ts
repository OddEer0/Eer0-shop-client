import { useForm } from "react-hook-form"

import { TextFieldProps } from "@/shared/ui/inputs/TextField"

import { IRegistrationForm } from "../types"

export const useRegistrationForm = () => {
	const { register, handleSubmit } = useForm<IRegistrationForm>()

	const submitHandler = handleSubmit((data: IRegistrationForm) => {
		// eslint-disable-next-line no-console
		console.log(data)
	})

	const getEmailInputProps: TextFieldProps = {
		...register("email"),
		label: "Почта"
	}

	const getNicknameInputProps: TextFieldProps = {
		...register("nickname"),
		label: "Логин"
	}

	const getPasswordInputProps: TextFieldProps = {
		...register("password"),
		label: "Пароль"
	}

	const getCopyPasswordInputProps: TextFieldProps = {
		...register("copyPassword"),
		label: "Повторите пароль"
	}

	const getFirstNameInputProps: TextFieldProps = {
		...register("firstName"),
		label: "Имя"
	}

	const getLastNameInputProps: TextFieldProps = {
		...register("lastName"),
		label: "Фамилия"
	}

	return {
		submitHandler,
		getEmailInputProps,
		getPasswordInputProps,
		getNicknameInputProps,
		getCopyPasswordInputProps,
		getFirstNameInputProps,
		getLastNameInputProps
	}
}
