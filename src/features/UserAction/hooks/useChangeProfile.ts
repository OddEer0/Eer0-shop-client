import { useForm } from "react-hook-form"

import { useProfileQuery } from "@/entities/User"

import { IUser } from "@/shared/api"
import { TextFieldProps } from "@/shared/ui"

export const useChangeProfile = () => {
	const { data } = useProfileQuery<IUser>()
	const { register } = useForm<IUser>({
		values: data
	})

	const getFirstNameProps: TextFieldProps = {
		...register("firstName"),
		label: "Имя"
	}

	const getLastNameProps: TextFieldProps = {
		...register("lastName"),
		label: "Фамилия"
	}

	return {
		getFirstNameProps,
		getLastNameProps
	}
}
