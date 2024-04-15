import { FC } from "react"
import { BiLike } from "react-icons/bi"

import { commentLikeQuerySelector, useOneCommentQuery } from "@/entities/Comment"

import { useLikeComment } from "../../api"

import { $LikeComment } from "./LikeComment.styles"

interface LikeCommentProps {
	id: string
	className?: string
}

export const LikeComment: FC<LikeCommentProps> = ({ id, className = "" }) => {
	const { mutate } = useLikeComment()
	const { data } = useOneCommentQuery(id, commentLikeQuerySelector)

	const clickHandler = () => {
		mutate(id)
	}

	return (
		<$LikeComment className={className}>
			<BiLike className="comment-like__icon" onClick={clickHandler} />
			{data && <p>{data}</p>}
		</$LikeComment>
	)
}
