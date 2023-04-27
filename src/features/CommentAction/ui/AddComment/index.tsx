import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { useForm } from "react-hook-form"

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

	const submitHandler = handleSubmit((data: IFormState) => {
		mutate({ description: data.description, deviceId })
	})

	return (
		<$AddComment onSubmit={submitHandler} {...props}>
			<TextArea className="add-comment__text-area" {...register("description")}></TextArea>
			<Button variant="contained">{children}</Button>
		</$AddComment>
	)
}
