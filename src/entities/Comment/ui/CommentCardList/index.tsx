import { FC } from "react"

import { useCommentQuery } from "../../api"
import { CommentCard } from "../CommentCard"

import { $CommentCardList } from "./CommentCardList.styles"

interface ID {
	id: string
}

interface CommentCardListProps {
	id: string
	like: FC<ID>
	dislike: FC<ID>
}

export const CommentCardList: FC<CommentCardListProps> = ({ id, dislike: Dislike, like: Like }) => {
	const { data } = useCommentQuery(id)

	return (
		<$CommentCardList>
			{data && data.length ? (
				data.map(comment => (
					<CommentCard
						key={comment.id}
						like={<Like id={comment.id} />}
						comment={comment}
						dislike={<Dislike id={comment.id} />}
					/>
				))
			) : (
				<p className="h3 not-comment">Нет комментариев</p>
			)}
		</$CommentCardList>
	)
}
