import { useForm } from "react-hook-form"

import { TextFieldProps } from "@/shared/ui"

import { ILoginForm } from "../types"

export const useLoginForm = () => {
	const { register, handleSubmit } = useForm<ILoginForm>()

	const submitHandler = handleSubmit((data: ILoginForm) => {
		// eslint-disable-next-line no-console
		console.log(data)
	})

	const getEmailInputProps: TextFieldProps = {
		...register("email"),
		label: "login"
	}

	const getPasswordInputProps: TextFieldProps = {
		...register("email"),
		label: "password"
	}

	return {
		submitHandler,
		getEmailInputProps,
		getPasswordInputProps
	}
}
