import { FC } from "react"
import { Controller } from "react-hook-form"

import { DatePicker, TextField } from "@/shared/ui"

import { useChangeProfile } from "../../hooks"

import { $ChangeProfile } from "./ChangeProfile.styles"

export const ChangeProfile: FC = () => {
	const { getFirstNameProps, getLastNameProps, control } = useChangeProfile()

	return (
		<$ChangeProfile>
			<TextField {...getFirstNameProps} />
			<TextField {...getLastNameProps} />
			<Controller
				render={({ field }) => (
					<DatePicker
						customInput={<TextField label="Дата рождения" placeholder="Не указан" />}
						selected={field.value}
						onChange={date => field.onChange(date)}
					/>
				)}
				control={control}
				name="birthday"
			/>
		</$ChangeProfile>
	)
}
