import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { IPostComment, commentService } from "@/shared/api"

import { ADD_COMMENT_MESSAGE } from "./constants"

export const useLikeComment = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["like"],
		mutationFn: (commentId: string) => commentService.likeComment(commentId),
		onSuccess(data, variables) {
			queryClient.setQueryData(["comment", variables], data)
			toast.success(ADD_COMMENT_MESSAGE)
		}
	})
}

export const useDislikeComment = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["dislike"],
		mutationFn: (commentId: string) => commentService.dislikeComment(commentId),
		onSuccess(data, variables) {
			queryClient.setQueryData(["comment", variables], data)
		}
	})
}

export const useAddComment = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["add", "comment"],
		mutationFn: (formData: IPostComment) => commentService.addComment(formData),
		onSuccess() {
			queryClient.refetchQueries({ queryKey: ["comments"] })
		}
	})
}
