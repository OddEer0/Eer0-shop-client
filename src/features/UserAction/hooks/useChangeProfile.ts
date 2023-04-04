import { useForm } from "react-hook-form"

import { useChangeProfileMutate, useProfileQuery } from "@/entities/User"

import { IUser } from "@/shared/api"
import { TextAreaProps, TextFieldProps } from "@/shared/ui"

export const useChangeProfile = () => {
	const { data } = useProfileQuery<IUser>()
	const { register, control, handleSubmit } = useForm<IUser>({
		values: data
	})

	const { mutate } = useChangeProfileMutate()

	const submitHandler = handleSubmit((data: IUser) => {
		mutate(data)
	})

	const getFirstNameProps: TextFieldProps = {
		...register("firstName"),
		label: "Имя",
		placeholder: "Марсель"
	}

	const getLastNameProps: TextFieldProps = {
		...register("lastName"),
		label: "Фамилия",
		placeholder: "Каримов"
	}

	const getSubTitleProps: TextAreaProps = {
		...register("subTitle"),
		label: "Описание",
		placeholder: "Нет описания..."
	}

	return {
		submitHandler,
		control,
		getFirstNameProps,
		getLastNameProps,
		getSubTitleProps
	}
}
