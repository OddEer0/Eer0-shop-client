import { useForm } from "react-hook-form"

import { useUserLoginMutate } from "@/entities/User"

import { IUserLoginBody } from "@/shared/api"
import { TextFieldProps } from "@/shared/ui"

import { FIELD_REQUIRED, LOGIN_MAX_LENGTH, LOGIN_MIN_LENGTH } from "../constants"

export const useUserLoginForm = () => {
	const { mutate } = useUserLoginMutate()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IUserLoginBody>({ mode: "onBlur" })

	const submitHandler = handleSubmit((data: IUserLoginBody) => mutate(data))

	const getEmailInputProps: TextFieldProps = {
		...register("nickname", {
			required: FIELD_REQUIRED,
			minLength: { value: 3, message: LOGIN_MIN_LENGTH },
			maxLength: { value: 20, message: LOGIN_MAX_LENGTH }
		}),
		label: "Логин",
		color: errors.nickname ? "danger" : "primary",
		subText: errors.nickname?.message && errors.nickname.message
	}

	const getPasswordInputProps: TextFieldProps = {
		...register("password", {
			required: FIELD_REQUIRED
		}),
		label: "Пароль",
		color: errors.password ? "danger" : "primary",
		subText: errors.password?.message && errors.password.message,
		type: "password"
	}

	return {
		submitHandler,
		getEmailInputProps,
		getPasswordInputProps
	}
}
