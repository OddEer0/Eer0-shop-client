import { FC } from "react"

import { CommentCardList } from "@/entities/Comment"

import { DislikeComment, LikeComment } from "@/features/CommentAction"

import { $ThirdSection } from "./ThirdSection.styles"

interface ThirdSectionProps {
	id: string
}

export const ThirdSection: FC<ThirdSectionProps> = ({ id }) => {
	return (
		<$ThirdSection>
			<h2 className="h2 third-section-title">Комментарий</h2>
			<CommentCardList id={id} like={LikeComment} dislike={DislikeComment} />
		</$ThirdSection>
	)
}
