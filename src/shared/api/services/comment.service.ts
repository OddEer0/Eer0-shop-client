import { AxiosInstance } from "axios"

import { api } from "../instance"
import { IComment, IComment$Avatar, IPostComment } from "../types/IComment"

class CommentService {
	readonly api: AxiosInstance
	constructor() {
		this.api = api
	}

	public async addComment(formData: IPostComment) {
		const { data } = await this.api.post<IComment>("comment", formData)
		return data
	}

	public async getCommentsByDeviceId(id: string) {
		const { data } = await this.api.get<IComment$Avatar[]>(`comment/${id}`)
		return data
	}

	public async updateComment(id: string, description: string) {
		const { data } = await this.api.put<IComment>(`comment/${id}`, { description })
		return data
	}

	public async likeComment(id: string) {
		const { data } = await this.api.post<IComment>(`comment/like/${id}`)
		return data
	}

	public async dislikeComment(id: string) {
		const { data } = await this.api.post<IComment>(`comment/dislike/${id}`)
		return data
	}

	public async getOne(id: string) {
		const { data } = await this.api.get<IComment>(`comment/one/${id}`)
		return data
	}
}

export const commentService = new CommentService()
