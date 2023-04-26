import { FC } from "react"
import { BiDislike } from "react-icons/bi"

import { commentDislikeQuerySelector, useOneCommentQuery } from "@/entities/Comment"

import { useDislikeComment } from "../../api"

import { $DislikeComment } from "./DislikeComment.styles"

interface DislikeCommentProps {
	id: string
	className?: string
}

export const DislikeComment: FC<DislikeCommentProps> = ({ id, className = "" }) => {
	const { mutate } = useDislikeComment()
	const { data } = useOneCommentQuery(id, commentDislikeQuerySelector)

	const clickHandler = () => mutate(id)

	return (
		<$DislikeComment>
			<BiDislike className={className} onClick={clickHandler} />
			{data && <p>{data}</p>}
		</$DislikeComment>
	)
}
