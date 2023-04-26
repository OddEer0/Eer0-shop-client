import { useMutation } from "@tanstack/react-query"

import { commentService } from "@/shared/api"

export const useLikeComment = () => {
	return useMutation({
		mutationKey: ["like"],
		mutationFn: (commentId: string) => commentService.likeComment(commentId)
	})
}

export const useDislikeComment = () => {
	return useMutation({
		mutationKey: ["dislike"],
		mutationFn: (commentId: string) => commentService.dislikeComment(commentId)
	})
}
