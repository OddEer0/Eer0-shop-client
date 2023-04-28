import { useForm } from "react-hook-form"

import { useChangeProfileMutate, useProfileQuery } from "@/entities/User"

import { IUser } from "@/shared/api"
import { TextAreaProps, TextFieldProps, confirmSelector, useConfirmStore } from "@/shared/ui"

import { CONFIRM_CHANGE } from "../constants"

export const useChangeProfile = () => {
	const confirm = useConfirmStore(confirmSelector)
	const { data } = useProfileQuery()
	const {
		register,
		control,
		handleSubmit,
		formState: { isDirty }
	} = useForm<IUser>({
		values: data
	})

	const { mutate, isLoading } = useChangeProfileMutate()

	const submitHandler = handleSubmit((data: IUser) => {
		confirm(CONFIRM_CHANGE, () => mutate(data))
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
