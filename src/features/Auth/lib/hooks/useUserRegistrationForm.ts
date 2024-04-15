import { useForm } from "react-hook-form"

import { IUserRegistrationBody } from "@/shared/api"
import { TextFieldProps } from "@/shared/ui"

import { useUserRegistrationMutate } from "../../api"
import {
	FIELD_REQUIRED,
	LOGIN_MAX_LENGTH,
	LOGIN_MIN_LENGTH,
	PASSWORD_MAX_LENGTH,
	PASSWORD_MIN_LENGTH,
	REGULAR_EMAIL,
	REGULAR_EMAIL_MESSAGE,
	REGULAR_PASSWORD,
	REGULAR_PASSWORD_MESSAGE
} from "../constants"
import { COPY_PASSWORD_MESSAGE } from "../constants/auth"

export const useUserRegistrationForm = () => {
	const { mutate } = useUserRegistrationMutate()

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError
	} = useForm<IUserRegistrationBody>({ mode: "onChange" })

	const submitHandler = handleSubmit((data: IUserRegistrationBody) => {
		if (data.copyPassword !== data.password) {
			setError("copyPassword", { message: COPY_PASSWORD_MESSAGE, type: "custom" })
			return
		}
		mutate(data)
	})

	const getEmailInputProps: TextFieldProps = {
		...register("email", {
			required: FIELD_REQUIRED,
			pattern: { value: REGULAR_EMAIL, message: REGULAR_EMAIL_MESSAGE }
		}),
		label: "Почта",
		color: errors.email ? "danger" : "primary",
		subText: errors.email?.message && errors.email.message,
		placeholder: "example@gmail.com"
	}

	const getNicknameInputProps: TextFieldProps = {
		...register("nickname", {
			required: FIELD_REQUIRED,
			minLength: { value: 3, message: LOGIN_MIN_LENGTH },
			maxLength: { value: 20, message: LOGIN_MAX_LENGTH }
		}),
		label: "Логин",
		color: errors.nickname ? "danger" : "primary",
		subText: errors.nickname?.message && errors.nickname.message,
		placeholder: "example"
	}

	const getPasswordInputProps: TextFieldProps = {
		...register("password", {
			required: FIELD_REQUIRED,
			minLength: { value: 8, message: PASSWORD_MIN_LENGTH },
			maxLength: { value: 20, message: PASSWORD_MAX_LENGTH },
			pattern: { value: REGULAR_PASSWORD, message: REGULAR_PASSWORD_MESSAGE }
		}),
		label: "Пароль",
		color: errors.password ? "danger" : "primary",
		subText: errors.password?.message && errors.password.message,
		placeholder: "password",
		type: "password"
	}

	const getFirstNameInputProps: TextFieldProps = {
		...register("firstName", { required: FIELD_REQUIRED }),
		label: "Имя",
		color: errors.firstName ? "danger" : "primary",
		subText: errors.firstName?.message && errors.firstName.message,
		placeholder: "Кирилл"
	}

	const getLastNameInputProps: TextFieldProps = {
		...register("lastName", { required: FIELD_REQUIRED }),
		label: "Фамилия",
		color: errors.lastName ? "danger" : "primary",
		subText: errors.lastName?.message && errors.lastName.message,
		placeholder: "Дубов"
	}

	const getCopyPasswordInputProps: TextFieldProps = {
		...register("copyPassword", {
			required: FIELD_REQUIRED
		}),
		label: "Повторите пароль",
		color: errors.copyPassword ? "danger" : "primary",
		subText: errors.copyPassword?.message && errors.copyPassword.message,
		placeholder: "password",
		type: "password"
	}

	return {
		submitHandler,
		getEmailInputProps,
		getPasswordInputProps,
		getNicknameInputProps,
		getFirstNameInputProps,
		getLastNameInputProps,
		getCopyPasswordInputProps
	}
}
