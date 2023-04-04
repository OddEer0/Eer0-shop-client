import { motion } from "framer-motion"
import { FC } from "react"
import { Controller } from "react-hook-form"

import { yToDownAnimation } from "@/shared/animation"
import { Button, DatePicker, TextArea, TextField } from "@/shared/ui"

import { useChangeProfile } from "../../hooks"

import { $ChangeProfile } from "./ChangeProfile.styles"

export const ChangeProfile: FC = () => {
	const { getFirstNameProps, getLastNameProps, getSubTitleProps, control, submitHandler } = useChangeProfile()

	return (
		<$ChangeProfile onSubmit={submitHandler}>
			<div className="wrapper">
				<motion.div
					variants={yToDownAnimation}
					animate="show"
					initial="hidden"
					custom={0}
					transition={{ duration: 0.5 }}
				>
					<TextField {...getFirstNameProps} />
				</motion.div>
				<motion.div
					variants={yToDownAnimation}
					animate="show"
					initial="hidden"
					custom={0.5}
					transition={{ duration: 0.5 }}
				>
					<TextField {...getLastNameProps} />
				</motion.div>
				<motion.div
					variants={yToDownAnimation}
					animate="show"
					initial="hidden"
					custom={1}
					transition={{ duration: 0.5 }}
				>
					<Controller
						render={({ field }) => (
							<DatePicker
								className="datepicker"
								customInput={<TextField label="Дата рождения" />}
								placeholderText="Не указан"
								selected={field.value}
								onChange={date => field.onChange(date)}
							/>
						)}
						control={control}
						name="birthday"
					/>
				</motion.div>
			</div>
			<motion.div
				variants={yToDownAnimation}
				animate="show"
				initial="hidden"
				custom={1.5}
				className="textarea-wrapper"
				transition={{ duration: 0.5 }}
			>
				<TextArea className="textarea" {...getSubTitleProps} />
			</motion.div>
			<motion.div
				className="form-button"
				variants={yToDownAnimation}
				animate="show"
				initial="hidden"
				custom={2}
				transition={{ duration: 0.5 }}
			>
				<Button variant="contained">Сохранить</Button>
			</motion.div>
		</$ChangeProfile>
	)
}
