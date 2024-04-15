import { FC } from "react"

import { CommentCardList } from "@/entities/Comment"

import { AddComment, DislikeComment, LikeComment } from "@/features/CommentAction"

import { $ThirdSection } from "./ThirdSection.styles"

interface ThirdSectionProps {
	id: string
}

export const ThirdSection: FC<ThirdSectionProps> = ({ id }) => {
	return (
		<$ThirdSection>
			<h2 className="h2 third-section__title">Комментарий</h2>
			<AddComment className="third-section__add-comment" deviceId={id}>
				Добавить комментарий
			</AddComment>
			<CommentCardList id={id} like={LikeComment} dislike={DislikeComment} />
		</$ThirdSection>
	)
}
