import { FC, ReactNode } from "react"

import { IComment$Avatar } from "@/shared/api"
import { Avatar } from "@/shared/ui"

import { $CommentCard } from "./CommentCard.styles"

interface CommentCardProps {
	comment: IComment$Avatar
	like: ReactNode
	dislike: ReactNode
	className?: string
}

export const CommentCard: FC<CommentCardProps> = ({ comment, dislike, like, className = "" }) => {
	return (
		<$CommentCard className={className}>
			<div className="comment-card__header">
				<Avatar url={comment.user.avatar} defaultAvatar={comment.user.firstName} avatarSize="large" />
				<h6 className="comment-card__title">
					{comment.user.firstName} {comment.user.lastName}
				</h6>
			</div>
			<p className="comment-card__description">{comment.description}</p>
			<div className="comment-card__footer">
				<div className="comment-card__like comment-card__icon">{like}</div>
				<div className="comment-card__dislike comment-card__icon">{dislike}</div>
			</div>
		</$CommentCard>
	)
}
