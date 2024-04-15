import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { useProfileQuery, userIdQuerySelector } from "@/entities/User"

import { UNAUTHORIZED } from "@/shared/constants"
import { Button, TextArea } from "@/shared/ui"

import { useAddComment } from "../../api"

import { $AddComment } from "./AddComment.styles"

interface IAddCommentProps {
	deviceId: string
	className?: string
}

interface IFormState extends HTMLAttributes<HTMLFormElement> {
	description: string
}

export const AddComment: FC<PropsWithChildren<IAddCommentProps>> = ({ deviceId, children, ...props }) => {
	const { mutate } = useAddComment()
	const { handleSubmit, register } = useForm<IFormState>()
	const { data: isAuth } = useProfileQuery(userIdQuerySelector)

	const submitHandler = handleSubmit((data: IFormState) => {
		if (isAuth) {
			mutate({ description: data.description, deviceId })
		} else {
			toast.error(UNAUTHORIZED)
		}
	})

	return (
		<$AddComment onSubmit={submitHandler} {...props}>
			<TextArea className="add-comment__text-area" {...register("description")}></TextArea>
			<Button variant="contained">{children}</Button>
		</$AddComment>
	)
}
