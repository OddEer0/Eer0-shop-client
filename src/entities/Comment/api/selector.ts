import { IComment } from "@/shared/api"

export const commentLikeQuerySelector = (state: IComment) => state.like

export const commentDislikeQuerySelector = (state: IComment) => state.dislike
