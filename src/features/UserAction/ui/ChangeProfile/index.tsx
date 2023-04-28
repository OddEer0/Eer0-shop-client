import { motion } from "framer-motion"
import { FC } from "react"
import { Controller } from "react-hook-form"

import { yToDownAnimation } from "@/shared/animation"
import { Backdrop, Button, DatePicker, Disabled, Spinner, TextArea, TextField } from "@/shared/ui"

import { useChangeProfile } from "../../lib/hooks"

import { $ChangeProfile } from "./ChangeProfile.styles"

export const ChangeProfile: FC = () => {
	const { getFirstNameProps, getLastNameProps, getSubTitleProps, control, submitHandler, isLoading, isDirty } =
		useChangeProfile()

	return (
		<>
			<Backdrop isShow={isLoading}>
				<Spinner variant="double-snake" size="large" />
			</Backdrop>
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
									dateFormat="dd/MM/yyyy"
									className="datepicker"
									customInput={<TextField label="Дата рождения" />}
									placeholderText="Не указан"
									selected={field.value}
									showYearDropdown
									scrollableYearDropdown
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
					<Disabled isDisabled={!isDirty}>
						<Button variant="contained">Сохранить</Button>
					</Disabled>
				</motion.div>
			</$ChangeProfile>
		</>
	)
}
