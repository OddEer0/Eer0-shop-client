import { useForm } from "react-hook-form"

import { useProfileQuery } from "@/entities/User"

import { IUser } from "@/shared/api"
import { TextFieldProps } from "@/shared/ui"

export const useChangeProfile = () => {
	const { data } = useProfileQuery<IUser>()
	const { register, control } = useForm<IUser>({
		values: data
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

	return {
		control,
		getFirstNameProps,
		getLastNameProps
	}
}
