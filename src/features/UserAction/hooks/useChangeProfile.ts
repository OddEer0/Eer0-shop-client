import { useForm } from "react-hook-form"

import { useChangeProfileMutate, useProfileQuery } from "@/entities/User"

import { IUser } from "@/shared/api"
import { TextAreaProps, TextFieldProps } from "@/shared/ui"

export const useChangeProfile = () => {
	const { data } = useProfileQuery<IUser>()
	const {
		register,
		control,
		handleSubmit,
		formState: { isDirty }
	} = useForm<IUser>({
		values: data
	})

	const { mutate, isLoading } = useChangeProfileMutate()

	const submitHandler = handleSubmit(async (data: IUser) => {
		await mutate(data)
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
		isDirty,
		isLoading,
		submitHandler,
		control,
		getFirstNameProps,
		getLastNameProps,
		getSubTitleProps
	}
}
